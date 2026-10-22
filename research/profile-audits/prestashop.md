> Temporary paths normalized; local setup omitted. Exact original retained locally.

# PrestaShop research audit
Checked 2026-10-21. Public primary sources; facts separated from assessments.

## Chronological research actions
2. Opened offers, PrestaShop 9 system requirements and project homepage. /about failed; search located /about-us.
3. Searched `site.prestashop.com PrestaShop cyber_Folks acquisition 2026 2007`; current About and parent current report establish February 2026 ownership change.
4. Read Serena portfolio for historical equity funders; did not label cyber_Folks as equity venture investor.
5. Current /enterprise URL inaccessible; current offers list Classic/Hosted. Current docs PHP chart ends 9.1 while About mentions 9.2; recorded version limitation.

## Source review and decisions
- Open/read `https://prestashop.com/about-us/`; public locator: Our mission. Decision: PrestaShop founded in 2007.
- Open/read `https://investors.cyberfolks.pl/en/reports/current-report-4-2026/`; public locator: Conclusion of an agreement for the acquisition of 100% of shares. Decision: cyber_Pixel, subsidiary of cyber_Folks, purchased 100% of PrestaShop from MBE in February 2026.
- Open/read `https://www.serena.vc/portfolio-profile/prestashop/`; public locator: Prestashop. Decision: Serena investor portfolio identifies Serena Capital, XAnge and Seventure as historical funders.
- Open/read `https://www.serena.vc/portfolio-profile/prestashop/`; public locator: Prestashop. Decision: Serena Capital is a documented equity investor; historical unless specified.
- Open/read `https://www.serena.vc/portfolio-profile/prestashop/`; public locator: Prestashop. Decision: XAnge Private Equity is a documented equity investor; historical unless specified.
- Open/read `https://www.serena.vc/portfolio-profile/prestashop/`; public locator: Prestashop. Decision: Seventure Partners is a documented equity investor; historical unless specified.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: CLASSIC — Free Download. Decision: Classic: free; monthly=0; annual total=None; USD/site. Software license cost is zero; infrastructure, extensions and external services can cost extra.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: Classic / Hosted comparison. Decision: No explicit Most popular or Recommended designation verified on the current public pricing page.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: Pricing comparison. Decision: Hosted: published; monthly=29; annual total=288; EUR/store. Vendor Hosted bundle, distinct from free Classic source. €24/month annual payment ×12 or €29/month no commitment; VAT excluded.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: Classic / Hosted offers. Decision: Current offers page has Classic and Hosted only. Legacy /enterprise URL failed; no current Enterprise offer/quote verified.
- Open/read `https://prestashop.com/about-us/`; public locator: Our mission — PrestaShop 9.2. Decision: A unified one-page checkout reduces the number of checkout steps merchants need to configure.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: Sell to 190 countries and in 20 different currencies. Decision: Localized payments and multi-currency selling support merchants serving multiple national markets.
- Open/read `https://prestashop.com/prestashop-offers/`; public locator: Attract new customers by connecting your store to social networks. Decision: Catalog connections to social networks and marketing modules link product merchandising to acquisition channels.
- Open/read `https://prestashop.com/about-us/`; public locator: Our mission; Our group. Decision: Its established merchant/module ecosystem and European commerce specialization create localized implementation and extension advantages.
- Open/read `https://prestashop.com/about-us/`; public locator: Our mission; Our group. Decision: No independent corporate financial sponsor roster established from current project pages. PrestaShop SA is the verified business steward; its cyber_Folks group backing is ownership, not automatically sponsorship.
- Open/read `https://prestashop.com/about-us/`; public locator: Our mission; Our group. Decision: PrestaShop SA: business-steward
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: PHP compatibility chart. Decision: PHP: required. Always. PrestaShop 9 docs list PHP 8.1–8.5 depending minor; 8.5 recommended for 9.1. Confirm 9.2 package compatibility; chart reviewed still ends at 9.1.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: System requirements. Decision: MySQL 5.7+: one-of. MySQL OR MariaDB; recent version recommended. Documented deployment component.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: System requirements. Decision: MariaDB 10.2+: one-of. MariaDB OR MySQL; recent version recommended. Documented deployment component.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: System requirements. Decision: Apache 2.4+: one-of. Apache OR Nginx. Documented deployment component.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: System requirements. Decision: Nginx 1.0+: one-of. Nginx OR Apache. Documented deployment component.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: Extensions. Decision: PHP extensions: required. Always. cURL, DOM, fileinfo, GD, iconv, intl, JSON, mbstring, OpenSSL, PDO/MySQL, SimpleXML and Zip; allow_url_fopen enabled.
- Open/read `https://devdocs.prestashop-project.org/9/basics/installation/system-requirements/`; public locator: System requirements. Decision: {'cpu': None, 'memory': '512 MB PHP memory_limit recommended minimum', 'storage': None, 'os': 'Unix/Linux preferred; macOS works; Windows not actively supported', 'notes': '512M is per-script allocation recommendation; no fixed machine CPU/disk minimum published.'}
- Open/read `https://www.prestashop-project.org/`; public locator: Ready to get started?; Installation. Decision: none-found. Official project links downloadable releases and manual/CLI/Docker installation; no current officially linked one-click self-host template verified. Hosted subscription is a vendor service, not represented as a self-host installer.

## Persistence and validation
- Wrote profile JSON and per-claim JSONL in the assigned group directory. No repository mutations.
- Validation command planned/completed centrally for this group: `node scripts/validate-profiles.mjs profiles`.
