// Fetch FAQ data from API
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        const faqContainer = document.querySelector('.faq');

        const faqData = [
            {
                title: "Hur kan jag ändra betalningsmetod?",
                body: data[0] ? data[0].body : "Inga detaljer tillgängliga.",
                alternateBody: "Du kan ändra betalningsmetod på Min sida på SATS under betalningsmetoder."
            },
            {
                title: "Hur ändrar jag mitt medlemskap?",
                body: data[1] ? data[1].body : "Inga detaljer tillgängliga.",
                alternateBody: "<p>Du kan ändra ditt medlemskap genom att logga in på din profil. Gör ändringen via Min sida. Uppgradering av medlemskap träder i kraft samma dag</p><p>Du kommer att faktureras från den dagen du gör ändringen och för den kommande perioden vid nästa betalning.</p><p> Nedgradering av medlemskap träder i kraft från och med den första dagen i månaden efter nästakommande månad. Det innebär att om du gör en ändring den 15 januari träder den i kraft från och med den 1 mars.</p><p> Kontakta oss om du vill ändra följande:</p><p> Premium / All-inclusive medlemskap</p><p><p>Förbetalat medlemskap Cash medlemskap</p><p> Företagsmedlemskap delbetalning med viss sponsring av företaget eller fullt sponsrat</p><p> Betalar för andras medlemskap / blir betalad för</p><p>Registrering av rabattavtal</P><p>Ändra gym/region</p>"
            },
            {
                title: "Varför har jag fått ett högre belopp att betala?",
                body: data[2] ? data[2].body : "Inga detaljer tillgängliga.",
                alternateBody: "<p>Det kan bero på extra avgifter eller tillägg.</p><p>Kontrollera din senaste faktura för detaljer.</p><p>Om du har frågor kan du kontakta vår support för mer information.</p>"
            },
            {
                title: "Varför har jag fått ett sms med en påminnelse om betalning?",
                body: data[3] ? data[3].body : "Inga detaljer tillgängliga.",
                alternateBody: "<p>Vi skickar ut påminnelser om betalning om vi inte har mottagit betalning till förfallodagen. Det kan finnas olika orsaker till att betalningen inte har gått igenom.</p><p>:Otillräckligt täckning på kontot</p><p>:Autogirot är inte aktivt</p><p>:Ditt betalkort har gått ut eller blivit blockerat</p>"
            },
            {
                title: "Var hittar jag årskvitto för mina betalningar av medlemskapet?",
                body: data[4] ? data[4].body : "Inga detaljer tillgängliga.",
                alternateBody: "Du kan ladda ner årskvitto på Min sida under Betalningsöversikt. Obs! Du behöver trycka på det året du vill ha."
            },
            {
                title: "Var kan jag se min betalningshistorik?",
                body: data[5] ? data[5].body : "Inga detaljer tillgängliga.",
                alternateBody: "Du kan se din betalningshistorik och ladda ner ditt friskvårdskvitto under Min sida och Betalningsöversikt."
            }
        ];

        faqData.forEach(post => {
            const section = document.createElement('div');
            section.classList.add('section');

            const title = document.createElement('div');
            title.classList.add('title');
            title.textContent = post.title;

            const description = document.createElement('div');
            description.classList.add('description');
            description.innerHTML = post.body; 

            section.appendChild(title);
            section.appendChild(description);
            faqContainer.appendChild(section);

            title.addEventListener('click', () => {
                title.classList.toggle('active');
                if (description.style.display === "block") {
                    description.style.display = "none"; 
                    description.innerHTML = post.body; 
                } else {
                    description.style.display = "block"; 
                    description.innerHTML = (description.innerHTML === post.body) ? post.alternateBody : post.body; 
                }
            });
        });
    })
    .catch(error => console.error('Error fetching data:', error));

document.addEventListener("DOMContentLoaded", () => {
    const footerTitles = document.querySelectorAll('.footer-title');

    footerTitles.forEach(title => {
        title.addEventListener('click', () => {
            const content = title.nextElementSibling;
            const arrow = title.querySelector('.arrow');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.innerHTML = '&#9660;'; 
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.innerHTML = '&#9650;';
            }
        });
    });
});



