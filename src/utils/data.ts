export const data = {
  languages: {
    br: {
      siteSettings: {
        title: "Nubimetrics",
      },
      menu: [
        {
          label: "Produto",
          link: "/Produto",
          submenu: [
            { label: "Vendedor Novato", link: "/br/vendedor-novato" },
            {
              label: "Vendedor Experiente",
              link: "/br/vendedor-experiente",
            },
          ],
        },
        { label: "Blog", link: "/Blog" },
        { label: "Academia", link: "/Academia" },
        { label: "Quem Somos", link: "/Quem" },
        { label: "Eventos", link: "/Eventos" },
        { label: "Suporte", link: "/Suporte" },
      ],
      menuFooter: [
        {
          title: "Vendedores",
          items: [
            { label: "Quero vender", link: "/quero-vender" },
            { label: "Sou vendedor", link: "/sou-vendedor" },
            { label: "Marca", link: "/marca" },
          ],
        },
        {
          title: "Aulas",
          items: [
            { label: "Academia", link: "/academia" },
            { label: "Treinamento", link: "/treinamento" },
            { label: "Blog", link: "/blog" },
          ],
        },
        {
          title: "Outros",
          items: [
            { label: "Sobre", link: "/sobre" },
            { label: "Vagas", link: "/vagas" },
            { label: "Soporte", link: "/soporte" },
            { label: "Imprensa", link: "/imprensa" },
          ],
        },
      ],
      social: [
        { label: "Instagram", icon: "FaInstagram", link: "/#" },
        { label: "Facebook", icon: "FaFacebookF", link: "/#" },
        { label: "Youtube", icon: "FaYoutube", link: "/#" },
        { label: "Linkedin", icon: "FaLinkedinIn", link: "/#" },
        { label: "Twitter", icon: "FaTwitter", link: "/#" },
      ],
      home: {
        hero: {
          title: "Informação para tomar melhores decisões no e-commerce_",
          subtitle:
            "A Nubimetrics é a plataforma para marcas e vendedores de e-commerce que fornece informações inteligentes para impulsionar o seu negócio.",
          cta: {
            text: "Escolha o tipo de vendedor que você é",
            link: "/#",
          },
          banners: [
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "1 Quero começar a vender",
              subtitle:
                "1 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "2 Quero começar a vender",
              subtitle:
                "2 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "3 Quero começar a vender",
              subtitle:
                "3 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
          ],
        },
        homeBrands: {
          title: "Eles confiam em nós",
          brands: [
            { img: "/images/icons/intel.png" },
            { img: "/images/icons/quilmes.png" },
            { img: "/images/icons/goodyear.png" },
            { img: "/images/icons/samsung.png" },
            { img: "/images/icons/disney.png" },
            { img: "/images/icons/puma.png" },
            { img: "/images/icons/hp.png" },
            { img: "/images/icons/pernoid-ricard.png" },
            { img: "/images/icons/dexter.png" },
            { img: "/images/icons/fravega.png" },
            { img: "/images/icons/nanoshop.png" },
            { img: "/images/icons/farmacity.png" },
          ],
        },
        videoModal: {
          title: "Veja como podemos te ajudar",
          iframeSrc: "https://www.youtube.com/embed/j2WOADJNtxU?controls=0",
        },
        infoCardList: {
          title: "Tome decisões inteligentes_",
          subtitle:
            "Incorpore informações em cada uma de suas decisões para otimizar o processo de vendas do e-commerce.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        infoCardSlider1: {
          title: "Comece a impulsionar o seu negócio_",
          subtitle:
            "Experimente Nubimetrics por 14 dias grátis e impulsione seus negócios.",
          cta: {
            label: "Comece agora",
            link: "",
          },
          items: [
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "1 Nome e sobrenome",
              subtitle: "1 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "2 Nome e sobrenome",
              subtitle: "2 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "3 Nome e sobrenome",
              subtitle: "3 Cargo, Empresa",
            },
          ],
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comece a usar Nubimetrics!_",
          subtitle:
            "Experimente gratuitamente a plataforma que vai te ajudar a tomar melhores decisões para aumentar sua lucratividade e construir um negócio sustentável no e-commerce.",
          cta1: {
            label: "Vendedor",
            link: "",
          },
          cta2: {
            label: "Marca",
            link: "",
          },
        },
      },
      vendedorNovato: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorNovato/quero-vender.png",
        },
        infoCardList: {
          title: "Vende de manera inteligente _",
          subtitle:
            "Incorpora información a cada una de tus decisiones para construir un negocio eficiente desde el principio.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "",
          subtitle: "",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
      vendedorExperiente: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorExperiente/sou-vendedor.png",
        },
        infoCardList: {
          title: "Vende de manera inteligente _",
          subtitle:
            "Incorpora información a cada una de tus decisiones para construir un negocio eficiente desde el principio.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "",
          subtitle: "",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
    },
    en: {
      siteSettings: {
        title: "Nubimetrics",
      },
      menu: [
        {
          label: "Product",
          link: "/product",
          submenu: [
            { label: "Beginner Seller", link: "/en/beginner-seller" },
            {
              label: "Experienced Seller",
              link: "/en/experienced-seller",
            },
          ],
        },
        { label: "Blog", link: "/Blog" },
        { label: "Academia", link: "/Academia" },
        { label: "Quem Somos", link: "/Quem" },
        { label: "Eventos", link: "/Eventos" },
        { label: "Suporte", link: "/Suporte" },
      ],
      menuFooter: [
        {
          title: "Vendedores",
          items: [
            { label: "Quero vender", link: "/quero-vender" },
            { label: "Sou vendedor", link: "/sou-vendedor" },
            { label: "Marca", link: "/marca" },
          ],
        },
        {
          title: "Aulas",
          items: [
            { label: "Academia", link: "/academia" },
            { label: "Treinamento", link: "/treinamento" },
            { label: "Blog", link: "/blog" },
          ],
        },
        {
          title: "Outros",
          items: [
            { label: "Sobre", link: "/sobre" },
            { label: "Vagas", link: "/vagas" },
            { label: "Soporte", link: "/soporte" },
            { label: "Imprensa", link: "/imprensa" },
          ],
        },
      ],
      social: [
        { label: "Instagram", icon: "FaInstagram", link: "/#" },
        { label: "Facebook", icon: "FaFacebookF", link: "/#" },
        { label: "Youtube", icon: "FaYoutube", link: "/#" },
        { label: "Linkedin", icon: "FaLinkedinIn", link: "/#" },
        { label: "Twitter", icon: "FaTwitter", link: "/#" },
      ],
      home: {
        hero: {
          title: "Informação para tomar melhores decisões no e-commerce_",
          subtitle:
            "A Nubimetrics é a plataforma para marcas e vendedores de e-commerce que fornece informações inteligentes para impulsionar o seu negócio.",
          cta: {
            text: "Escolha o tipo de vendedor que você é",
            link: "/#",
          },
          banners: [
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "1 Quero começar a vender",
              subtitle:
                "1 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "2 Quero começar a vender",
              subtitle:
                "2 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "3 Quero começar a vender",
              subtitle:
                "3 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
          ],
        },
        homeBrands: {
          title: "Eles confiam em nós",
          brands: [
            { img: "/images/icons/intel.png" },
            { img: "/images/icons/quilmes.png" },
            { img: "/images/icons/goodyear.png" },
            { img: "/images/icons/samsung.png" },
            { img: "/images/icons/disney.png" },
            { img: "/images/icons/puma.png" },
            { img: "/images/icons/hp.png" },
            { img: "/images/icons/pernoid-ricard.png" },
            { img: "/images/icons/dexter.png" },
            { img: "/images/icons/fravega.png" },
            { img: "/images/icons/nanoshop.png" },
            { img: "/images/icons/farmacity.png" },
          ],
        },
        videoModal: {
          title: "Veja como podemos te ajudar",
          iframeSrc: "https://www.youtube.com/embed/j2WOADJNtxU?controls=0",
        },
        infoCardList: {
          title: "Tome decisões inteligentes_",
          subtitle:
            "Incorpore informações em cada uma de suas decisões para otimizar o processo de vendas do e-commerce.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        infoCardSlider1: {
          title: "Comece a impulsionar o seu negócio_",
          subtitle:
            "Experimente Nubimetrics por 14 dias grátis e impulsione seus negócios.",
          cta: {
            label: "Comece agora",
            link: "",
          },
          items: [
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "1 Nome e sobrenome",
              subtitle: "1 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "2 Nome e sobrenome",
              subtitle: "2 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "3 Nome e sobrenome",
              subtitle: "3 Cargo, Empresa",
            },
          ],
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },

        infoCardOptions: {
          title: "Comece a usar Nubimetrics!_",
          subtitle:
            "Experimente gratuitamente a plataforma que vai te ajudar a tomar melhores decisões para aumentar sua lucratividade e construir um negócio sustentável no e-commerce.",
          cta1: {
            label: "Vendedor",
            link: "",
          },
          cta2: {
            label: "Marca",
            link: "",
          },
        },
      },
      vendedorNovato: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorNovato/quero-vender.png",
        },
        infoCardList: {
          title: "Tome decisões inteligentes_",
          subtitle:
            "Incorpore informações em cada uma de suas decisões para otimizar o processo de vendas do e-commerce.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "",
          subtitle: "",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
      vendedorExperiente: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorExperiente/sou-vendedor.png",
        },
        infoCardList: {
          title: "Vende de manera inteligente _",
          subtitle:
            "Incorpora información a cada una de tus decisiones para construir un negocio eficiente desde el principio.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "",
          subtitle: "",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
    },
    es: {
      siteSettings: {
        title: "Nubimetrics",
      },
      menu: [
        {
          label: "Producto",
          link: "/Producto",
          submenu: [
            { label: "Vendedor Novato", link: "/es/vendedor-novato" },
            {
              label: "Vendedor Experimentado",
              link: "/es/vendedor-experimentado",
            },
          ],
        },
        { label: "Blog", link: "/Blog" },
        { label: "Academia", link: "/Academia" },
        { label: "Quem Somos", link: "/Quem" },
        { label: "Eventos", link: "/Eventos" },
        { label: "Suporte", link: "/Suporte" },
      ],
      menuFooter: [
        {
          title: "Vendedores",
          items: [
            { label: "Quero vender", link: "/quero-vender" },
            { label: "Sou vendedor", link: "/sou-vendedor" },
            { label: "Marca", link: "/marca" },
          ],
        },
        {
          title: "Aulas",
          items: [
            { label: "Academia", link: "/academia" },
            { label: "Treinamento", link: "/treinamento" },
            { label: "Blog", link: "/blog" },
          ],
        },
        {
          title: "Outros",
          items: [
            { label: "Sobre", link: "/sobre" },
            { label: "Vagas", link: "/vagas" },
            { label: "Soporte", link: "/soporte" },
            { label: "Imprensa", link: "/imprensa" },
          ],
        },
      ],
      social: [
        { label: "Instagram", icon: "FaInstagram", link: "/#" },
        { label: "Facebook", icon: "FaFacebookF", link: "/#" },
        { label: "Youtube", icon: "FaYoutube", link: "/#" },
        { label: "Linkedin", icon: "FaLinkedinIn", link: "/#" },
        { label: "Twitter", icon: "FaTwitter", link: "/#" },
      ],
      home: {
        hero: {
          title: "Informação para tomar melhores decisões no e-commerce_",
          subtitle:
            "A Nubimetrics é a plataforma para marcas e vendedores de e-commerce que fornece informações inteligentes para impulsionar o seu negócio.",
          cta: {
            text: "Escolha o tipo de vendedor que você é",
            link: "/#",
          },
          banners: [
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "1 Quero começar a vender",
              subtitle:
                "1 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "2 Quero começar a vender",
              subtitle:
                "2 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
            {
              image: "/images/home/home-hero.png",
              link: "/#",
              title: "3 Quero começar a vender",
              subtitle:
                "3 Encontre o produto perfeito para vender online e aumente sua lucratividade.",
            },
          ],
        },
        homeBrands: {
          title: "Eles confiam em nós",
          brands: [
            { img: "/images/icons/intel.png" },
            { img: "/images/icons/quilmes.png" },
            { img: "/images/icons/goodyear.png" },
            { img: "/images/icons/samsung.png" },
            { img: "/images/icons/disney.png" },
            { img: "/images/icons/puma.png" },
            { img: "/images/icons/hp.png" },
            { img: "/images/icons/pernoid-ricard.png" },
            { img: "/images/icons/dexter.png" },
            { img: "/images/icons/fravega.png" },
            { img: "/images/icons/nanoshop.png" },
            { img: "/images/icons/farmacity.png" },
          ],
        },
        videoModal: {
          title: "Veja como podemos te ajudar",
          iframeSrc: "https://www.youtube.com/embed/j2WOADJNtxU?controls=0",
        },
        infoCardList: {
          title: "Tome decisões inteligentes_",
          subtitle:
            "Incorpore informações em cada uma de suas decisões para otimizar o processo de vendas do e-commerce.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        infoCardSlider1: {
          title: "Comece a impulsionar o seu negócio_",
          subtitle:
            "Experimente Nubimetrics por 14 dias grátis e impulsione seus negócios.",
          cta: {
            label: "Comece agora",
            link: "",
          },
          items: [
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "1 Nome e sobrenome",
              subtitle: "1 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "2 Nome e sobrenome",
              subtitle: "2 Cargo, Empresa",
            },
            {
              image:
                "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula.",
              title: "3 Nome e sobrenome",
              subtitle: "3 Cargo, Empresa",
            },
          ],
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comece a usar Nubimetrics!_",
          subtitle:
            "Experimente gratuitamente a plataforma que vai te ajudar a tomar melhores decisões para aumentar sua lucratividade e construir um negócio sustentável no e-commerce.",
          cta1: {
            label: "Vendedor",
            link: "",
          },
          cta2: {
            label: "Marca",
            link: "",
          },
        },
      },
      vendedorNovato: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorNovato/quero-vender.png",
        },
        infoCardList: {
          title: "Tome decisões inteligentes_",
          subtitle:
            "Incorpore informações em cada uma de suas decisões para otimizar o processo de vendas do e-commerce.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "Construye un negocio eficiente _",
          subtitle:
            "Accede a las mejores funcionalidades y recursos para optimizar tus decisiones.",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
      vendedorExperiente: {
        hero: {
          title: "Comienza a vender online_",
          subtitle:
            "Encuentra el producto perfecto para vender y crecer en e-commerce.",
          cta: {
            link: "/#",
            label: "Saber más",
          },
          imageUrl: "/images/vendedorExperiente/sou-vendedor.png",
        },
        infoCardList: {
          title: "Vende de manera inteligente _",
          subtitle:
            "Incorpora información a cada una de tus decisiones para construir un negocio eficiente desde el principio.",
          cards: [
            {
              tabTitle: "Alíneate a las reglas del canal",
              tag: "1 Escolha o produto para vender",
              title: "1 Vender produtos em demanda_",
              subtitle:
                "1 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Amplía tu oferta",
              tag: "2 Escolha o produto para vender",
              title: "2 Vender produtos em demanda_",
              subtitle:
                "2 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Escoge las batallas que puedes ganar",
              tag: "3 Escolha o produto para vender",
              title: "3 Vender produtos em demanda_",
              subtitle:
                "3 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conoce el ranking de vendedores",
              tag: "4 Escolha o produto para vender",
              title: "4 Vender produtos em demanda_",
              subtitle:
                "4 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
            {
              tabTitle: "Conquista la eficiencia",
              tag: "5 Escolha o produto para vender",
              title: "5 Vender produtos em demanda_",
              subtitle:
                "5 Descubra novos mercados com alta demanda, construa um estoque eficiente e impulsione suas vendas.",
              image: "/images/home/home-2.png",
            },
          ],
        },
        infoCardTab: {
          title: "Incorpora información para potenciar tu negocio online_",
          cards: [
            {
              tabtitle: "1 Vendedor iniciante",
              title:
                "1 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "2 Vendedor iniciante",
              title:
                "2 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
            {
              tabtitle: "3 Vendedor iniciante",
              title:
                "3 Tudo o que você precisa para começar a vender e crescer nos marketplaces.",
              list: [
                {
                  title: "Mercado",
                  subtitle:
                    "Obtenha informações para conhecer a demanda nos marketplaces e aumentar suas vendas",
                  image: "/images/home/hometab-1.png",
                },
                {
                  title: "Competencia",
                  subtitle:
                    "Conheça as estratégias de seus concorrentes e saiba como superá-las.",
                  image: "/images/home/hometab-2.png",
                },
                {
                  title: "Meu negócio",
                  subtitle:
                    "Descubra o potencial do seu negócio e melhore a sua rentabilidade.",
                  image: "/images/home/hometab-3.png",
                },
              ],
            },
          ],
        },
        listInfoItems: {
          title: "",
          subtitle: "",
          items: [
            {
              title: "1 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "2 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "3 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "4 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "5 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
            {
              title: "6 Actualizaciones diarias",
              subtitle:
                "Recibe información actualizada y en tiempo real de lo que ocurre en tu negocio.",
            },
          ],
        },
        card: {
          title: "Ayudamos a Kaspersky a monitorear su presencia online.",
          subtitle:
            "La información que provee Nubimetrics es esencial para que Karspesky controle los vendedores de su marca y combata la piratería de sus productos.",
          imageUrl:
            "data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' height='100' width='100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23FFFFFF' /%3E%3C/svg%3E",
          text1:
            "“Nubimetrics nos ayuda a supervisar la marca, ver lo que hace la competencia y entender qué marcas se venden en el e-commerce”",
          text2: "Fabiano",
          text3: "Gerente Comercial - Mister Auto",
        },
        infoCardSlider2: {
          title: "Blog Nubimetrics_",
          subtitle:
            "Encontre todos os conselhos e novidades sobre tendências e oportunidades no comércio eletrónico para potenciar o seu negócio online.",
          items: [
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "1 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "1 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "2 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "2 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "3 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "3 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
            {
              image: "/images/home/homeBannerSliderType2.png",
              description:
                "4 Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis.",
              title: "4 Aliquam mollis",
              cta: { link: "#", label: "> link" },
            },
          ],
        },
        infoCardOptions: {
          title: "Comienza a expandir tu negocio con Nubimetrics!_",
          subtitle:
            "Prueba gratis la plataforma que te ayudará a tomar mejores decisiones para potenciar tu rentabilidad y construir un negocio sustentable en e-commerce.",
          cta1: {
            label: "Probar gratis ahora",
            link: "",
          },
        },
        faq: {
          title: "Preguntas frecuentes_",
          items: [
            {
              title: "1 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "2 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "3 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "4 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "5 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "6 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "7 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
            {
              title: "8 Aliquam mollis mattis?",
              content:
                "Aliquam mollis mattis augue sit amet blandit. Fusce felis risus, hendrerit at lobortis a, rhoncus porta ligula. Sed ac purus sit amet odio tempus feugiat id eget sem.",
            },
          ],
        },
      },
    },
  },
};
