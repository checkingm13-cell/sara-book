# 05 - Schema.org JSON-LD Specifications

Structured data is the primary bridge between website content and modern search systems (Google Rich Results, Google Knowledge Panels, and AI Overviews / Perplexity / ChatGPT Search citations).

---

## 1. Book Schema (For Every Title Page)

Placed inside the `<head>` of `/book/[slug]` pages:

```json
{
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Modeling, Analysis Of Transmission Line, Transformer And Load With Harmonic Mitigation",
  "isbn": "978-93-89847-XX-X",
  "bookFormat": "https://schema.org/Hardcover",
  "inLanguage": "en",
  "numberOfPages": 320,
  "datePublished": "2021-01-15",
  "publisher": {
    "@type": "Organization",
    "name": "Sara Book Publication",
    "url": "https://sarapublication.com"
  },
  "author": [
    {
      "@type": "Person",
      "name": "Dr. Academic Scholar",
      "jobTitle": "Associate Professor",
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": "Gujarat Technological University"
      }
    }
  ],
  "description": "Comprehensive academic research monograph on electrical transmission lines and harmonic mitigation techniques for engineering faculty and postgraduate researchers.",
  "image": "https://sarapublication.com/images/covers/transmission-line.webp"
}
```

---

## 2. Organization & LocalBusiness Schema (For Homepage / Global Layout)

Placed in the root layout to cement brand authority and Google Maps entity matching:

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Sara Book Publication",
  "url": "https://sarapublication.com",
  "logo": "https://sarapublication.com/logo.png",
  "telephone": "+91-8866003636",
  "email": "editor@sarapublication.com",
  "foundingDate": "2011",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "303, Maharana Pratap Complex, Opp. Kapadia Guest House, B/H V.S. Hospital, Paldi",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380006",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0163,
    "longitude": 72.5714
  },
  "sameAs": [
    "https://www.worldwidejournals.com"
  ]
}
```

---

## 3. FAQPage Schema (For Author Guidelines & AEO Featured Snippets)

Used on `/guidelines/authors` to claim direct voice and snippet answers:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do books published by Sara Publication carry valid ISBNs for UGC API score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all academic books, monographs, and conference proceedings published by Sara Book Publication are allotted authentic 13-digit ISBNs issued through Raja Rammohun Roy National Agency for ISBN, complying with UGC norms for faculty API scores."
      }
    },
    {
      "@type": "Question",
      "name": "In which languages can manuscripts be published?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sara Book Publication publishes manuscripts in English, Hindi, and Gujarati across Science, Engineering, Medicine, and Humanities."
      }
    }
  ]
}
```
