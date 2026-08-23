/* =============================================================
   NEW'S GRILL KEBAB CHEZ SULO — i18n (FR / DE)
   - Détection automatique de la langue de l'appareil
     (FR si l'appareil est en français, sinon DE)
   - Bouton de bascule manuel (mémorisé dans localStorage)
   - Rendu dynamique de la carte à partir d'une seule source
     de données bilingue (menuData)
   ============================================================= */

(function () {
  "use strict";

  /* ---------- 1. TEXTES STATIQUES DU SITE ---------- */
  var STR = {
    fr: {
      nav_about: "Le restaurant",
      nav_menu: "Notre carte",
      nav_gallery: "Galerie",
      nav_reviews: "Avis",
      nav_contact: "Contact",

      hero_tagline: "La qualité au cœur de chaque kebab",
      hero_call: "09 52 83 27 66",
      hero_cta: "Nous trouver",

      intro_title: "Votre restaurant kebab &amp; grillades à Waldwisse",
      intro_text: "Chez <strong>New's Grill Kebab chez Sulo</strong>, nous partageons avec vous notre passion pour les saveurs généreuses et les bons produits. Venez découvrir nos <strong>kebabs</strong>, nos <strong>keftas maison</strong> et nos <strong>grillades</strong>, et laissez-vous transporter par les arômes enivrants de notre cuisine.",

      item_generous: "Une cuisine généreuse",
      item_family: "Accueil familial",
      item_rating: "Note 5/5 sur Google",
      item_quality: "Viandes de qualité",

      activity_menu: "Carte &amp; infos pratiques",
      activity_gallery: "Le restaurant en images",

      about_h2: "Une adresse chaleureuse",
      about_h3: "autour du kebab à Waldwisse",
      about_p1: "De la traditionnelle <strong>kefta grillée</strong> à l'emblématique <strong>kebab en baguette</strong>, en passant par nos <strong>assiettes mixtes</strong>, chaque plat est une invitation à un voyage gustatif. Chez <strong>New's Grill Kebab chez Sulo</strong>, nous sélectionnons avec soin des ingrédients de première qualité pour vous offrir des saveurs authentiques.",
      about_p2: "Notre viande, préparée selon nos <strong>recettes maison</strong>, est grillée pour une tendreté incomparable. Accompagnée de légumes frais et de sauces savoureuses, elle vous garantit une expérience culinaire unique. Goûtez à notre <strong>kefta fondante</strong>, à notre <strong>kebab emblématique</strong> et à nos <strong>grillades à la perfection</strong>. Chaque bouchée est une promesse de saveurs intenses.",
      about_img_caption: "Doner kebab &amp; grillades maison",

      menu_h2: "Notre carte",
      menu_sub: "Des recettes généreuses, des produits frais, des saveurs qui reviennent.",
      tab_all: "Tout",
      tab_assiette: "Assiettes",
      tab_sandwich: "Sandwichs",
      tab_tacos: "Tacos",
      tab_texmex: "Tex-Mex",
      tab_burger: "Burger",
      tab_panini: "Panini",
      tab_salade: "Salades",
      tab_vegetarien: "Végétarien",
      tab_boisson: "Boissons",
      tab_enfant: "Enfant &amp; Dessert",

      menu_note: "* Les prix et disponibilités peuvent varier. Contactez-nous pour toute question.",
      footnote_title: "Pains et sauces",
      footnote_text1: "Sauce kebab maison, Andalouse, Samouraï, Ketchup, Mayonnaise, Harissa, Burger, Algérienne, Barbecue, etc.",
      footnote_text2: "Tous nos pains sont artisanaux. Nos pains et légumes sont d'origine France.",
      allergen_title: "Allergènes",
      allergens: ["Gluten", "Œufs", "Poisson", "Crustacés", "Arachide", "Soja", "Céleri", "Lait", "Fruits à coque", "Moutarde", "Sésame", "Sulfites", "Lupin", "Mollusques"],

      gallery_h2: "Notre ambiance",
      gallery_sub: "Venez découvrir notre maison à Waldwisse",
      gallery_caption: "Notre doner kebab signature",
      gallery_note: "Partagez votre repas sur Google pour figurer ici !",

      reviews_h2: "Ce que disent nos clients",
      reviews_score_count: "Note parfaite — 17 avis vérifiés",
      reviews_source: "Source : Google Maps",
      reviews_author: "Client Google",
      review_1: "\"Absolument délicieux. La viande a un goût exceptionnel. Je recommande fortement le kofta. Un vrai changement, le doner kebab en baguette — fantastique !\"",
      review_2: "\"Excellent goût, une viande vraiment exceptionnelle. Belle salle. Service impeccable.\"",
      review_3: "\"Ce soir j'ai retrouvé les saveurs de mon passé… votre cuisine est délicieuse, dans un cadre agréable. Merci pour votre accueil chaleureux.\"",
      review_4: "\"Super, le patron est très sympa et nous a offert des fruits. Des ingrédients de qualité, très bons sandwichs. Fortement recommandé !\"",

      info_address_label: "Adresse",
      info_phone_label: "Téléphone",
      info_hours_label: "Horaires",
      info_hours_1: "Mar–Dim : 11h–14h | 17h–22h",
      info_hours_2: "Lundi : Fermé",

      contact_h2: "N'hésitez pas à nous contacter",
      ph_firstname: "Prénom",
      ph_lastname: "Nom",
      ph_phone: "Téléphone",
      ph_email: "E-mail",
      ph_subject: "Objet",
      ph_message: "Message",
      btn_submit: "Envoyer",
      form_success: "✅ Message envoyé, merci !",
      map_btn: "🗺️ Ouvrir dans Google Maps",

      horaires_widget_days: "Mar – Dim",
      horaires_widget_line1: "11H00 | 14H00",
      horaires_widget_line2: "17H00 | 22H00",
      horaires_widget_closed_label: "Lundi",
      horaires_widget_closed: "Fermé",

      footer_tagline: "De la fourche à la fourchette",
      footer_contact_title: "Contactez-nous",
      footer_sitemap_title: "Plan du site",
      footer_home: "Accueil",
      footer_menu: "Notre carte",
      footer_gallery: "Galerie photo",
      footer_contact: "Contact",
      footer_specialties_title: "Nos spécialités",
      footer_specialties: ["Kebab", "Kefta maison", "Grillades", "Tacos", "Fast-food"],
      footer_rights: "© 2025 New's Grill Kebab chez Sulo — 20 Grand Rue, 57480 Waldwisse — Tous droits réservés",

      lang_switch: "DE"
    },

    de: {
      nav_about: "Das Restaurant",
      nav_menu: "Unsere Karte",
      nav_gallery: "Galerie",
      nav_reviews: "Bewertungen",
      nav_contact: "Kontakt",

      hero_tagline: "Qualität steckt in jedem Kebab",
      hero_call: "09 52 83 27 66",
      hero_cta: "Anfahrt",

      intro_title: "Ihr Kebab- &amp; Grillrestaurant in Waldwisse",
      intro_text: "Bei <strong>New's Grill Kebab chez Sulo</strong> teilen wir mit Ihnen unsere Leidenschaft für großzügige Aromen und gute Produkte. Entdecken Sie unsere <strong>Kebabs</strong>, unsere <strong>hausgemachten Köfte</strong> und unsere <strong>Grillgerichte</strong> und lassen Sie sich von den betörenden Aromen unserer Küche verzaubern.",

      item_generous: "Großzügige Küche",
      item_family: "Familiärer Empfang",
      item_rating: "Bewertung 5/5 auf Google",
      item_quality: "Fleisch in Top-Qualität",

      activity_menu: "Karte &amp; praktische Infos",
      activity_gallery: "Das Restaurant in Bildern",

      about_h2: "Ein herzlicher Ort",
      about_h3: "rund um den Kebab in Waldwisse",
      about_p1: "Vom traditionellen <strong>gegrillten Köfte</strong> bis zum unverwechselbaren <strong>Kebab im Baguette</strong>, über unsere <strong>gemischten Teller</strong> — jedes Gericht ist eine Einladung zu einer geschmacklichen Reise. Bei <strong>New's Grill Kebab chez Sulo</strong> wählen wir unsere Zutaten sorgfältig aus, um Ihnen authentische Aromen zu bieten.",
      about_p2: "Unser Fleisch, nach <strong>hausgemachten Rezepten</strong> zubereitet, wird für eine unvergleichliche Zartheit gegrillt. Begleitet von frischem Gemüse und schmackhaften Soßen garantiert es Ihnen ein einzigartiges kulinarisches Erlebnis. Probieren Sie unseren <strong>zart schmelzenden Köfte</strong>, unseren <strong>unverwechselbaren Kebab</strong> und unsere <strong>perfekt gegrillten Spezialitäten</strong>. Jeder Bissen ist ein Versprechen intensiver Aromen.",
      about_img_caption: "Döner Kebab &amp; hausgemachte Grillgerichte",

      menu_h2: "Unsere Karte",
      menu_sub: "Großzügige Rezepte, frische Produkte, Aromen, die man nicht vergisst.",
      tab_all: "Alle",
      tab_assiette: "Teller",
      tab_sandwich: "Sandwiches",
      tab_tacos: "Tacos",
      tab_texmex: "Tex-Mex",
      tab_burger: "Burger",
      tab_panini: "Panini",
      tab_salade: "Salate",
      tab_vegetarien: "Vegetarisch",
      tab_boisson: "Getränke",
      tab_enfant: "Kinder &amp; Dessert",

      menu_note: "* Preise und Verfügbarkeit können variieren. Kontaktieren Sie uns bei Fragen.",
      footnote_title: "Brot und Soßen",
      footnote_text1: "Hausgemachte Kebab-Soße, Andalusische Soße, Samurai-Soße, Ketchup, Mayonnaise, Harissa, Burger-Soße, Algerische Soße, Barbecue-Soße usw.",
      footnote_text2: "Alle unsere Brote werden handwerklich hergestellt. Brot und Gemüse: Herkunft Frankreich.",
      allergen_title: "Allergene",
      allergens: ["Gluten", "Eier", "Fisch", "Krebstiere", "Erdnuss", "Soja", "Sellerie", "Milch", "Nüsse", "Senf", "Sesam", "Sulfite", "Lupine", "Weichtiere"],

      gallery_h2: "Unser Ambiente",
      gallery_sub: "Entdecken Sie unser Haus in Waldwisse",
      gallery_caption: "Unser Döner Kebab, die Spezialität des Hauses",
      gallery_note: "Teilen Sie Ihr Essen auf Google, um hier zu erscheinen!",

      reviews_h2: "Das sagen unsere Kunden",
      reviews_score_count: "Perfekte Bewertung — 17 verifizierte Bewertungen",
      reviews_source: "Quelle: Google Maps",
      reviews_author: "Google-Kunde",
      review_1: "\"Absolut köstlich. Das Fleisch schmeckt außergewöhnlich. Ich empfehle sehr das Köfte. Eine echte Abwechslung, der Döner im Baguette — fantastisch!\"",
      review_2: "\"Ausgezeichneter Geschmack, wirklich außergewöhnliches Fleisch. Schöner Saal. Tadelloser Service.\"",
      review_3: "\"Heute Abend habe ich die Aromen meiner Vergangenheit wiedergefunden… Ihre Küche ist köstlich, in einem angenehmen Rahmen. Danke für den herzlichen Empfang.\"",
      review_4: "\"Super, der Chef ist sehr sympathisch und hat uns Obst angeboten. Hochwertige Zutaten, sehr gute Sandwiches. Sehr zu empfehlen!\"",

      info_address_label: "Adresse",
      info_phone_label: "Telefon",
      info_hours_label: "Öffnungszeiten",
      info_hours_1: "Di–So: 11–14 Uhr | 17–22 Uhr",
      info_hours_2: "Montag: Geschlossen",

      contact_h2: "Kontaktieren Sie uns gerne",
      ph_firstname: "Vorname",
      ph_lastname: "Name",
      ph_phone: "Telefon",
      ph_email: "E-Mail",
      ph_subject: "Betreff",
      ph_message: "Nachricht",
      btn_submit: "Senden",
      form_success: "✅ Nachricht gesendet, vielen Dank!",
      map_btn: "🗺️ In Google Maps öffnen",

      horaires_widget_days: "Di – So",
      horaires_widget_line1: "11H00 | 14H00",
      horaires_widget_line2: "17H00 | 22H00",
      horaires_widget_closed_label: "Montag",
      horaires_widget_closed: "Geschlossen",

      footer_tagline: "Von der Heugabel zur Gabel",
      footer_contact_title: "Kontaktieren Sie uns",
      footer_sitemap_title: "Sitemap",
      footer_home: "Startseite",
      footer_menu: "Unsere Karte",
      footer_gallery: "Fotogalerie",
      footer_contact: "Kontakt",
      footer_specialties_title: "Unsere Spezialitäten",
      footer_specialties: ["Kebab", "Hausgemachtes Köfte", "Grillgerichte", "Tacos", "Fast-Food"],
      footer_rights: "© 2025 New's Grill Kebab chez Sulo — 20 Grand Rue, 57480 Waldwisse — Alle Rechte vorbehalten",

      lang_switch: "FR"
    }
  };

  /* ---------- 2. DONNÉES DE LA CARTE (bilingue) ---------- */
  var MENU = [
    {
      id: "assiette", icon: "🍽️",
      title: { fr: "Assiettes", de: "Teller" },
      sub: { fr: "Composées de crudités, frites, viande et sauces.", de: "Bestehen aus Salat, Pommes, Fleisch und Soßen." },
      items: [
        { name: { fr: "Döner kebab", de: "Döner Kebab" }, allergens: "1,8,10,11", small: "11,00€", large: "13,00€" },
        { name: { fr: "Köfte (boulette de viande hachée)", de: "Köfte (Hackfleischbällchen)" }, allergens: "1,8,10", price: "13,00€" },
        { name: { fr: "Saucisse Turque", de: "Türkische Wurst" }, allergens: "1,8,10", price: "13,00€" },
        { name: { fr: "Merguez Double", de: "Doppelte Merguez" }, allergens: "1,8,10", price: "13,00€" },
        { name: { fr: "Brochette Poulet", de: "Hähnchenspieß" }, allergens: "1,10,12", price: "13,00€" },
        { name: { fr: "Cordon Bleu", de: "Cordon Bleu" }, allergens: "10", price: "11,00€" },
        { name: { fr: "Steak haché", de: "Hacksteak" }, allergens: "1,2,8", price: "11,00€" },
        { name: { fr: "Saucisse blanche (double)", de: "Weiße Wurst (doppelt)" }, allergens: "1,2,8", price: "13,00€" },
        { name: { fr: "New's Grill : 3 viandes au choix", de: "New's Grill: 3 Fleischsorten nach Wahl" }, allergens: "1,2,8,10", price: "17,00€" }
      ]
    },
    {
      id: "sandwich", icon: "🥙",
      title: { fr: "Sandwichs", de: "Sandwiches" },
      sub: { fr: "Menu Frites + Boisson : +3,00€ · Supplément sauce/fromage : +0,50€", de: "Menü mit Pommes + Getränk: +3,00€ · Zusatz Soße/Käse: +0,50€" },
      items: [
        { name: { fr: "Döner kebab", de: "Döner Kebab" }, allergens: "1,8,10,11", price: "7,00€" },
        { name: { fr: "Dürüm", de: "Dürüm" }, allergens: "1,8", price: "7,50€" },
        { name: { fr: "Brochette Poulet", de: "Hähnchenspieß" }, allergens: "1,8,10", price: "7,50€" },
        { name: { fr: "Köfte", de: "Köfte" }, allergens: "1,8,10", price: "7,00€" },
        { name: { fr: "Saucisse Turque", de: "Türkische Wurst" }, allergens: "1,8,10", price: "7,50€" },
        { name: { fr: "Merguez Double", de: "Doppelte Merguez" }, allergens: "1,10,12", price: "7,00€" },
        { name: { fr: "Américain", de: "Amerikaner" }, allergens: "1,8,10", price: "6,80€" },
        { name: { fr: "Cheeseburger", de: "Cheeseburger" }, allergens: "1,2,8,10,11", price: "7,00€" },
        { name: { fr: "Cheese Américain", de: "Amerikanischer Käse" }, allergens: "1,2,8,10", price: "7,50€" },
        { name: { fr: "Végétarien", de: "Vegetarisch" }, allergens: "1,8,10", price: "5,50€" }
      ]
    },
    {
      id: "tacos", icon: "🌯",
      title: { fr: "Tacos", de: "Tacos" },
      allergens: "1,8,10,11",
      sub: {
        fr: "Viandes au choix : Döner Kebab, Viande hachée, Köfte, Saucisse Turque, Merguez, Brochette Poulet, Cordon Bleu, Tenders, Nuggets · Menu Frites + Boisson : +3,00€",
        de: "Fleischsorten nach Wahl: Döner Kebab, Hackfleisch, Köfte, Türkische Wurst, Merguez, Hähnchenspieß, Cordon Bleu, Tenders, Nuggets · Menü mit Pommes + Getränk: +3,00€"
      },
      items: [
        { name: { fr: "1 viande", de: "1 Fleischsorte" }, price: "8,00€" },
        { name: { fr: "2 viandes", de: "2 Fleischsorten" }, price: "10,00€" },
        { name: { fr: "3 viandes", de: "3 Fleischsorten" }, price: "12,50€" }
      ]
    },
    {
      id: "texmex", icon: "🍟",
      title: { fr: "Tex-Mex", de: "Tex-Mex" },
      items: [
        { name: { fr: "Petite Frites", de: "Kleine Pommes" }, price: "3,00€" },
        { name: { fr: "Grande Frites", de: "Große Pommes" }, price: "4,50€" },
        { name: { fr: "Potatoes", de: "Kartoffeln" }, price: "3,50€" },
        { name: { fr: "Tenders (3 pièces)", de: "Tenders (3 Stück)" }, allergens: "1,2,8", price: "6,00€" },
        { name: { fr: "Nuggets (5 pièces)", de: "Nuggets (5 Stück)" }, allergens: "1,2,8", price: "5,00€" },
        { name: { fr: "Mozzarella stick", de: "Mozzarella-Sticks" }, allergens: "1,8", price: "4,00€" },
        { name: { fr: "Barquette viande Petite", de: "Schale Fleisch, klein" }, price: "6,50€" },
        { name: { fr: "Barquette viande Grande", de: "Schale Fleisch, groß" }, price: "8,50€" },
        { name: { fr: "Petit curry (merguez, blanche, boulettes)", de: "Kleines Curry (Merguez, weiße Wurst, Fleischbällchen)" }, price: "5,50€" },
        { name: { fr: "Grand curry (merguez, blanche, boulettes)", de: "Großes Curry (Merguez, weiße Wurst, Fleischbällchen)" }, price: "7,50€" }
      ]
    },
    {
      id: "burger", icon: "🍔",
      title: { fr: "Burger", de: "Burger" },
      items: [
        { name: { fr: "Chicken (Poulet)", de: "Chicken (Huhn)" }, allergens: "1,2,8", price: "8,50€" },
        { name: { fr: "Steack", de: "Steak" }, allergens: "1,2,8", price: "8,50€" }
      ]
    },
    {
      id: "panini", icon: "🧀",
      title: { fr: "Panini", de: "Panini" },
      sub: { fr: "Nos paninis sont composés de fromage et de sauce.", de: "Unsere Paninis bestehen aus Käse und Soße." },
      items: [
        { name: { fr: "Fromage", de: "Käse" }, allergens: "1,2,8", price: "5,50€" },
        { name: { fr: "Thon", de: "Thunfisch" }, allergens: "1,2,8", price: "6,00€" },
        { name: { fr: "Saucisse", de: "Wurst" }, allergens: "1,2,8", price: "6,50€" }
      ]
    },
    {
      id: "salade", icon: "🥗",
      title: { fr: "Salades", de: "Salate" },
      items: [
        { name: { fr: "César", de: "César" }, desc: { fr: "Pavé de poulet, salade, tomates, carottes râpées", de: "Hähnchenfilet, Salat, Tomaten, geriebene Möhren" }, price: "8,50€" },
        { name: { fr: "Bergère", de: "Hirtin" }, desc: { fr: "Tomates, concombre, féta, oignon, persil", de: "Tomaten, Gurke, Feta, Zwiebel, Petersilie" }, price: "7,50€" },
        { name: { fr: "Océane", de: "Océane" }, desc: { fr: "Thon, salade, maïs, tomates, concombre, mozzarella", de: "Thunfisch, Salat, Mais, Tomaten, Gurke, Mozzarella" }, price: "8,50€" },
        { name: { fr: "New's Grill", de: "New's Grill" }, desc: { fr: "Poulet, piment, olives, maïs, salade, roquette, tomates", de: "Hähnchen, Chili, Oliven, Mais, Salat, Rucola, Tomaten" }, price: "9,50€" }
      ]
    },
    {
      id: "vegetarien", icon: "🥬",
      title: { fr: "Menu Végétarien", de: "Vegetarisches Menü" },
      items: [
        { name: { fr: "Bergère", de: "Hirtin" }, desc: { fr: "Tomates, concombre, féta, oignon, persil", de: "Tomaten, Gurke, Feta, Zwiebel, Petersilie" }, price: "7,50€" },
        { name: { fr: "Panini Fromage", de: "Käse-Panini" }, price: "5,50€" },
        { name: { fr: "Pain / Frites", de: "Brot / Pommes frites" }, price: "4,50€" }
      ]
    },
    {
      id: "boisson", icon: "🥤",
      title: { fr: "Boissons", de: "Getränke" },
      groups: [
        {
          sub: { fr: "Soft", de: "Alkoholfrei" },
          items: [
            { name: { fr: "Boisson Soft (33cl)", de: "Erfrischungsgetränk (33cl)" }, price: "2,00€" },
            { name: { fr: "Red Bull (25cl)", de: "Red Bull (25cl)" }, price: "2,50€" },
            { name: { fr: "Café expresso", de: "Espresso" }, price: "1,70€" },
            { name: { fr: "Grand Café", de: "Großer Kaffee" }, price: "2,50€" },
            { name: { fr: "Thé (Noir/Citron)", de: "Tee (Schwarz/Zitrone)" }, price: "2,50€" }
          ]
        },
        {
          sub: { fr: "Alcool", de: "Alkohol" },
          items: [
            { name: { fr: "Bitburger (33cl)", de: "Bitburger (33cl)" }, price: "2,50€" },
            { name: { fr: "Urpils (33cl)", de: "Urpils (33cl)" }, price: "2,50€" },
            { name: { fr: "Desperados (33cl)", de: "Desperados (33cl)" }, price: "3,50€" },
            { name: { fr: "Picon (45cl)", de: "Picon (45cl)" }, price: "5,50€" }
          ]
        },
        {
          sub: { fr: "Digestifs", de: "Digestifs" },
          items: [
            { name: { fr: "Limoncello (5cl)", de: "Limoncello (5cl)" }, price: "3,50€" },
            { name: { fr: "Amaretto (5cl)", de: "Amaretto (5cl)" }, price: "3,50€" }
          ]
        }
      ]
    },
    {
      id: "enfant", icon: "🎁",
      title: { fr: "Menu Enfant", de: "Kindermenü" },
      items: [
        { name: { fr: "Nuggets, Frites…", de: "Nuggets, Pommes…" }, desc: { fr: "Jouet et Caprisun inclus", de: "Spielzeug und Caprisun inklusive" }, price: "7,50€" }
      ],
      second: {
        title: { fr: "Dessert", de: "Dessert" },
        icon: "🍮",
        items: [
          { name: { fr: "Tiramisu", de: "Tiramisu" }, desc: { fr: "Bueno · Speculos/choco · Caramel/Spéculos", de: "Bueno · Spekulatius/Schoko · Karamell/Spekulatius" }, price: "3,50€" },
          { name: { fr: "Tartofu", de: "Tartofu" }, desc: { fr: "Choco / pistache (sur place)", de: "Schoko / Pistazie (nur vor Ort)" }, price: "6,50€" }
        ]
      }
    }
  ];

  /* ---------- 3. RENDU DE LA CARTE ---------- */
  function sup(allerg) {
    return allerg ? " <sup>" + allerg + "</sup>" : "";
  }

  function row(item, lang) {
    var name = item.name[lang] + sup(item.allergens);
    var desc = item.desc ? '<span class="menu-row-desc">' + item.desc[lang] + "</span>" : "";
    if (item.small && item.large) {
      return '<div class="menu-row menu-row-double"><span class="menu-row-name">' + name + '</span><span class="menu-row-dots"></span>' +
        '<span class="price-double"><b>' + (lang === "fr" ? "Petite" : "Klein") + "</b> " + item.small +
        ' <b>' + (lang === "fr" ? "Grande" : "Groß") + "</b> " + item.large + "</span></div>";
    }
    var cls = item.desc ? "menu-row menu-row-desc-row" : "menu-row";
    return '<div class="' + cls + '"><span class="menu-row-name">' + name + desc + '</span><span class="menu-row-dots"></span><span class="price-pill">' + item.price + "</span></div>";
  }

  function renderMenu(lang) {
    var tabsHtml = '<button class="tab-btn active" data-cat="all">' + STR[lang].tab_all + "</button>";
    var groupsHtml = "";

    MENU.forEach(function (cat) {
      tabsHtml += '<button class="tab-btn" data-cat="' + cat.id + '">' + STR[lang]["tab_" + cat.id] + "</button>";

      var titleSup = sup(cat.allergens);
      var html = '<div class="menu-group" data-cat="' + cat.id + '">';
      html += '<h3 class="menu-group-title">' + cat.icon + " " + cat.title[lang] + titleSup + "</h3>";
      if (cat.sub) html += '<p class="menu-group-sub">' + cat.sub[lang] + "</p>";

      if (cat.groups) {
        cat.groups.forEach(function (g, i) {
          html += '<p class="menu-group-sub"' + (i > 0 ? ' style="margin-top:20px"' : "") + ">" + g.sub[lang] + "</p>";
          html += '<div class="menu-rows">';
          g.items.forEach(function (it) { html += row(it, lang); });
          html += "</div>";
        });
      } else {
        html += '<div class="menu-rows">';
        cat.items.forEach(function (it) { html += row(it, lang); });
        html += "</div>";
      }

      if (cat.second) {
        html += '<h3 class="menu-group-title" style="margin-top:32px">' + cat.second.icon + " " + cat.second.title[lang] + "</h3>";
        html += '<div class="menu-rows">';
        cat.second.items.forEach(function (it) { html += row(it, lang); });
        html += "</div>";
      }

      html += "</div>";
      groupsHtml += html;
    });

    var tabsEl = document.getElementById("menu-tabs");
    var gridEl = document.getElementById("menu-grid");
    if (tabsEl) tabsEl.innerHTML = tabsHtml;
    if (gridEl) gridEl.innerHTML = groupsHtml;

    var allergenGrid = document.querySelector(".allergen-grid");
    if (allergenGrid) {
      allergenGrid.innerHTML = STR[lang].allergens.map(function (name, i) {
        return "<span><b>" + (i + 1) + "</b> " + name + "</span>";
      }).join("");
    }

    // re-attach tab filter behaviour
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelectorAll(".tab-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var cat = btn.dataset.cat;
        document.querySelectorAll(".menu-group").forEach(function (group) {
          group.style.display = (cat === "all" || group.dataset.cat === cat) ? "block" : "none";
        });
      });
    });
  }

  /* ---------- 4. APPLICATION DES TEXTES STATIQUES ---------- */
  function applyStatic(lang) {
    var t = STR[lang];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] === undefined) return;
      el.innerHTML = t[key];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });

    var reviewTexts = document.querySelectorAll("[data-i18n-review]");
    reviewTexts.forEach(function (el) {
      var key = el.getAttribute("data-i18n-review");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    var specialtiesList = document.getElementById("footer-specialties-list");
    if (specialtiesList && t.footer_specialties) {
      specialtiesList.innerHTML = t.footer_specialties.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    }

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) langBtn.textContent = t.lang_switch;

    var titleTag = document.querySelector("title");
    if (titleTag) {
      titleTag.textContent = lang === "fr"
        ? "New's Grill Kebab chez Sulo — Waldwisse"
        : "New's Grill Kebab chez Sulo — Waldwisse (Deutsch)";
    }
  }

  /* ---------- 5. DÉTECTION DE LANGUE ---------- */
  function detectLang() {
    var stored = null;
    try { stored = localStorage.getItem("ngs_lang"); } catch (e) {}
    if (stored === "fr" || stored === "de") return stored;

    var device = (navigator.language || navigator.userLanguage || "fr").toLowerCase();
    // Si la langue par défaut de l'appareil est le français -> FR
    // Sinon on prend la langue par défaut de l'appareil (DE si germanophone, DE par défaut sinon)
    if (device.indexOf("fr") === 0) return "fr";
    if (device.indexOf("de") === 0) return "de";
    return "de"; // appareil non francophone -> on bascule sur l'autre langue disponible (DE)
  }

  function setLang(lang) {
    try { localStorage.setItem("ngs_lang", lang); } catch (e) {}
    applyStatic(lang);
    renderMenu(lang);
  }

  window.NGS_I18N = { setLang: setLang, detectLang: detectLang };

  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLang();
    setLang(lang);

    var langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("lang") === "fr" ? "fr" : "de";
        setLang(current === "fr" ? "de" : "fr");
      });
    }
  });
})();
