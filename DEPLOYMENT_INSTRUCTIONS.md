# Netlify Edge Function Deployment Instructies

## Overzicht
Deze implementatie gebruikt Netlify Edge Functions om dynamische blog posts op te halen uit Supabase en geoptimaliseerde SEO meta tags te injecteren voor zoekmachine crawlers.

## Vereisten

### 1. Supabase Setup
✅ Supabase project aangemaakt  
✅ Posts tabel aangemaakt via migratie  
✅ Service Role Key beschikbaar  

### 2. Netlify Setup
✅ Project gedeployed naar Netlify  
✅ Edge Functions enabled (automatisch)  
✅ Environment variables toegang  

## Stap-voor-Stap Implementatie

### Stap 1: Supabase Migratie Uitvoeren

De database migratie is al aangemaakt in `supabase/migrations/20240115000000_create_posts_table.sql`

Als je Lovable Cloud gebruikt, wordt deze automatisch uitgevoerd.

### Stap 2: Netlify Environment Variables Instellen

1. **Ga naar Netlify Dashboard**
   - Open https://app.netlify.com
   - Selecteer jouw site
   - Ga naar: Site settings → Environment variables

2. **Voeg deze variabelen toe:**

   **Variable 1:**
   - Key: `SUPABASE_URL`
   - Value: `https://your-project-id.supabase.co`
   - Scopes: ✓ All (of minimaal: Edge functions)

   **Variable 2:**
   - Key: `SUPABASE_SERVICE_ROLE_KEY`
   - Value: `eyJ...` (je service role key)
   - Scopes: ✓ All (of minimaal: Edge functions)
   - ⚠️ **Belangrijk:** Dit is de SERVICE ROLE key, niet de ANON key!

3. **Service Role Key Vinden:**
   - Ga naar https://supabase.com/dashboard
   - Selecteer je project
   - Ga naar: Settings → API
   - Scroll naar "Project API keys"
   - Kopieer de **service_role** key (niet de anon key!)

### Stap 3: Deployment Triggeren

Na het instellen van environment variables:

```bash
# Commit en push je code
git add .
git commit -m "Add Supabase-powered edge functions for blog SEO"
git push origin main
```

Netlify zal automatisch:
- Je site rebuilden
- Edge functions deployen
- Environment variables beschikbaar maken

### Stap 4: Testing

**Test met PowerShell (Windows):**
```powershell
(iwr "https://jouw-site.netlify.app/blog/seo-gids-2024" -UserAgent "Googlebot").Content
```

**Test met curl (Mac/Linux):**
```bash
curl -H "User-Agent: Googlebot" https://jouw-site.netlify.app/blog/seo-gids-2024
```

**Wat te verwachten:**
Je zou moeten zien:
- ✅ Dynamische `<title>` tag uit Supabase
- ✅ Meta description uit Supabase
- ✅ Open Graph tags
- ✅ JSON-LD structured data
- ✅ FAQ schema (als aanwezig in content)

## Database Schema

De posts tabel heeft deze structuur:

```sql
posts (
  id UUID PRIMARY KEY
  title TEXT NOT NULL
  slug TEXT UNIQUE NOT NULL
  excerpt TEXT
  content TEXT
  meta_title TEXT
  meta_description TEXT
  category TEXT
  featured_image TEXT
  featured_image_alt TEXT
  status TEXT (draft|published|archived)
  published_at TIMESTAMPTZ
  created_at TIMESTAMPTZ
  updated_at TIMESTAMPTZ
)
```

## Blog Posts Toevoegen

### Via Supabase Dashboard:

1. Ga naar Supabase Dashboard → Table Editor → posts
2. Klik "Insert row"
3. Vul verplichte velden in:
   - `title`: "Jouw Blog Titel"
   - `slug`: "jouw-blog-slug" (URL-vriendelijk, uniek)
   - `excerpt`: Korte samenvatting
   - `content`: Volledige blog content (markdown ondersteund)
   - `status`: "published"
   - `category`: "SEO Strategieën" (of andere categorie)
4. Optionele velden:
   - `meta_title`: Custom SEO titel
   - `meta_description`: Custom SEO beschrijving
   - `featured_image`: URL naar featured image
   - `featured_image_alt`: Alt tekst voor afbeelding
   - `published_at`: Publicatie datum (of laat leeg voor nu)

### Via SQL:

```sql
INSERT INTO public.posts (
  title,
  slug,
  excerpt,
  content,
  meta_title,
  meta_description,
  category,
  status,
  published_at
) VALUES (
  'Nieuwe Blog Post Titel',
  'nieuwe-blog-post',
  'Korte samenvatting van de post',
  'Volledige content hier...',
  'SEO Geoptimaliseerde Titel',
  'SEO geoptimaliseerde beschrijving (max 160 karakters)',
  'Cloud Migratie',
  'published',
  NOW()
);
```

## Hoe het Werkt

### Flow Diagram:
```
Crawler Request → Netlify Edge Function → Supabase Query → HTML Enhancement → Response
```

### Gedetailleerd:

1. **Crawler maakt request** naar `/blog/seo-gids-2024`
2. **Edge Function wordt getriggerd** (geografisch dichtstbijzijnde datacenter)
3. **Supabase query wordt uitgevoerd:**
   - Zoekt post met slug = "seo-gids-2024"
   - Filtert op status = "published"
   - Gebruikt service role key (bypast RLS)
4. **SEO tags worden gegenereerd:**
   - Gebruikt data uit Supabase
   - Genereert Open Graph tags
   - Maakt JSON-LD structured data
   - Detecteert en genereert FAQ schema
5. **HTML wordt geïnjecteerd:**
   - Vervangt `<title>` tag
   - Voegt alle meta tags toe
   - Behoudt originele React app
6. **Enhanced HTML wordt geserveerd** aan crawler

### Performance:
- **Edge processing:** 50-200ms overhead
- **Supabase query:** 20-100ms
- **Total overhead:** ~100-300ms
- **Caching:** 1 uur browser, 2 uur CDN, 24 uur stale-while-revalidate

## Troubleshooting

### Edge Function Logs Bekijken:
1. Ga naar Netlify Dashboard
2. Klik op "Edge Functions" in het menu
3. Selecteer "blog-seo" function
4. Bekijk logs voor errors

### Veelvoorkomende Problemen:

**Problem:** Edge function retourneert geen SEO tags
- **Oplossing:** Check environment variables in Netlify
- **Check:** Logs voor "Missing SUPABASE environment variables"

**Problem:** "No published post found for slug"
- **Oplossing:** Controleer of post status = 'published' in Supabase
- **Check:** Slug spelling is exact hetzelfde

**Problem:** RLS policy errors
- **Oplossing:** Migratie bevat service_role policy, maar verifieer:
```sql
-- Check policies
SELECT * FROM pg_policies WHERE tablename = 'posts';
```

**Problem:** Edge function niet aangeroepen
- **Oplossing:** Verifieer netlify.toml bestaat en correct is
- **Check:** Deploy logs voor edge function deployment

### Debug Mode:

Tijdelijk debug logging toevoegen aan edge function:

```typescript
console.log('Edge function triggered for:', slug);
console.log('Supabase URL:', SUPABASE_URL);
console.log('Service key present:', !!SUPABASE_SERVICE_KEY);
console.log('Post found:', !!post);
```

## Security Best Practices

✅ **Service Role Key:**
- Alleen in Netlify environment variables
- Nooit in git repository
- Gebruikt alleen in server-side code (edge functions)

✅ **RLS Policies:**
- Public kan alleen published posts zien
- Service role heeft volledige toegang
- Draft posts blijven privé

✅ **Content Injection:**
- Alle content wordt ge-escaped (XSS preventie)
- HTML special characters worden geconverteerd
- Veilig voor user-generated content

## SEO Features

### Basis Meta Tags:
- ✅ Dynamic title tags
- ✅ Meta descriptions
- ✅ Canonical URLs
- ✅ Robots directives

### Social Sharing:
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Featured images support
- ✅ Alt text voor accessibility

### Structured Data:
- ✅ BlogPosting schema
- ✅ Organization schema
- ✅ Article metadata
- ✅ Automatische FAQ schema detectie

### AI Overview Optimalisatie:
- ✅ FAQ schema voor Google's "People also ask"
- ✅ Rich snippets support
- ✅ Voice search optimalisatie
- ✅ Featured snippet kandidaat content

## Monitoring & Analytics

### Google Search Console:
1. Voeg property toe: https://jouw-site.netlify.app
2. Verifieer ownership
3. Submit sitemap: https://jouw-site.netlify.app/sitemap.xml
4. Monitor "Coverage" voor indexing status

### Rich Results Test:
```
https://search.google.com/test/rich-results
```
Test je blog URLs om structured data te valideren.

### Performance Monitoring:
- Netlify Analytics (edge function execution time)
- Supabase Dashboard (query performance)
- Google PageSpeed Insights (overall performance)

## Volgende Stappen

### Content Vullen:
1. ✅ Database schema is klaar
2. ⏳ Voeg volledige content toe aan posts
3. ⏳ Upload featured images
4. ⏳ Optimaliseer meta descriptions

### SEO Verbeteren:
1. ⏳ Submit sitemap aan Google Search Console
2. ⏳ Request indexing voor nieuwe posts
3. ⏳ Monitor rich results appearance
4. ⏳ Track rankings en impressions

### Content Management:
1. ⏳ Overweeg Supabase dashboard als CMS
2. ⏳ Of bouw custom admin interface
3. ⏳ Setup automated backups
4. ⏳ Implementeer preview functionaliteit

## Support & Resources

- **Netlify Edge Functions Docs:** https://docs.netlify.com/edge-functions/overview/
- **Supabase REST API:** https://supabase.com/docs/guides/api
- **Schema.org BlogPosting:** https://schema.org/BlogPosting
- **Google Rich Results:** https://developers.google.com/search/docs/appearance/structured-data

## Licentie & Credits

Deze implementatie is geoptimaliseerd voor:
- Lovable React SPA architectuur
- Supabase backend
- Netlify Edge Functions
- Nederlandse content & SEO

Voor vragen of problemen, check de Netlify function logs of Supabase dashboard.
