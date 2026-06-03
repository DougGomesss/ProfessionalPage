import { PortfolioContent } from './portfolio-content';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/douglas-oliveira-806710208/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/DougGomesss',
    variant: 'github' as const,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/techd.node/',
    variant: 'instagram' as const,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511980491930',
    variant: 'whatsapp' as const,
  },
];

export const TRANSLATIONS: Record<'pt-BR' | 'en', PortfolioContent> = {
  'pt-BR': {
    meta: {
      title: 'Douglas Gomes | Versatilidade Técnica',
    },
    languageSwitcher: {
      label: 'Idioma',
      languages: {
        'pt-BR': 'PT',
        en: 'EN',
      },
    },
    hero: {
      title: 'Versatilidade Técnica',
      subtitle: 'Da Automação IoT à Nuvem Escalável',
      description: 'Engenharia de software aplicada em diferentes ecossistemas tecnológicos',
      secondaryAction: 'Falar no WhatsApp',
    },
    projects: {
      eyebrow: 'Projetos em Destaque',
      title: 'Uma seleção de soluções em contextos técnicos diferentes',
      openProjectPrefix: 'Abrir detalhes do projeto',
      items: [
        {
          id: 1,
          title: 'Sistema IoT: Balança de Precisão com Consulta de IMC',
          shortDescription:
            'Desenvolvimento de uma balança inteligente com cálculo de IMC em tempo real e telemetria.',
          technologies: ['C++', 'Arduino', 'HX711 (ADC)', 'ESP8266/ESP32', 'Sensores'],
          imageUrl: 'IOT1.png',
          imageUrl2: 'image.png',
          video: 'GRAVADO.mp4',
          detailedSpecs: `Este projeto consiste em uma balança inteligente que realiza a consulta de IMC (Índice de Massa Corporal) de forma automatizada. Com base no peso detectado e na altura especificada, o sistema processa o cálculo e retorna o resultado em uma tela digital.

Componentes e Hardware:
• Microcontrolador: Arduino / ESP
• Placa de fenolite customizada
• Sensor de temperatura (utilizado para modo standby)
• Célula de carga (balança)
• Conversor HX711 (ADC - Analogic Digital Converter)
• Regulador de tensão 7805
• Trafo 9V 250mA

Eficiência Energética e Consumo:
O projeto foi otimizado para eficiência real, considerando que o ESP consome cerca de 150mA com o trafo utilizado. A análise do consumo real de corrente foi fundamental para garantir a estabilidade do regulador de tensão e a precisão das leituras do ADC.`,
        },
        {
          id: 2,
          title: 'Calculadora de Vigas para Produção',
          shortDescription:
            'Aplicação em C# para cálculo de vigotas, materiais e custo total com geração de relatório.',
          technologies: ['C#', '.EXE'],
          imageUrl: 'beam-calculator-overview.jpeg',
          imageUrl2: 'beam-calculator-report.jpeg',
          detailedSpecs: `Esta calculadora de vigas foi desenvolvida para automatizar o processo de produção a partir das medidas informadas pelo cliente. A aplicação recebe vão livre, largura do topo, largura da base e o tipo de material, processando a quantidade de vigotas, a soma dos metros lineares e a estimativa de material necessário.

Também gera um relatório final com os comprimentos de cada viga, total produzido, valor por metro linear e custo total do pedido, com opção de envio direto para a impressora padrão do Windows.`,
        },
        {
          id: 3,
          title: 'POC: Automação de Orçamentos via WhatsApp',
          shortDescription:
            'A loja não conseguia atender todos os clientes — a automação garante que nenhum fique sem resposta, retendo o interesse até o atendimento humano.',
          technologies: ['.NET 8', 'Minimal API', 'WhatsApp Webhook', 'Vite', 'HTML/CSS'],
          imageUrl: 'Automação_whatsapp.jpeg',
          video: 'Automação_whatsapp.mp4',
          detailedSpecs: `Problema resolvido:
A loja recebia mais contatos do que conseguia atender simultaneamente. Clientes sem resposta iam embora. A automação entra como uma primeira camada de atendimento: coleta os dados do orçamento de forma guiada e mantém o cliente engajado até que um atendente humano assuma.

Como as tecnologias se conversam:
O cliente envia uma mensagem no WhatsApp → a Meta entrega esse evento via webhook para o endpoint POST /whatsapp/webhook da Minimal API .NET 8 → o servidor identifica a sessão do cliente pelo número de telefone usando um ConcurrentDictionary em memória → a máquina de estados (enum ConversationStage) determina em qual etapa da conversa aquele número está e qual resposta enviar → a API chama de volta a API do WhatsApp para entregar a mensagem ao cliente.

O simulador (Vite + HTML/CSS puro) aponta para o endpoint POST /simulator/messages da mesma API, permitindo testar o fluxo completo sem depender do WhatsApp real. A lógica de negócio é a mesma nos dois caminhos — o que muda é apenas de onde a mensagem chega.

Fluxo de coleta:
• Produto desejado → Quantidade → Tipo de entrega → Dados de cadastro (nome, endereço, telefone)
• Cada campo de texto livre exige confirmação do cliente antes de avançar, evitando erros de digitação gravados no pedido
• Mensagens de áudio são detectadas e o cliente recebe uma resposta ativa com duas opções: digitar ou falar com atendente
• Ao final, um resumo completo é enviado ao cliente antes de encerrar o atendimento automatizado`,
        },
      ],
    },
    presentation: {
      title: 'Trajetória Profissional',
      highlight:
        'Sou Douglas Gomes, tenho 26 anos e atuo como Desenvolvedor .NET Full Stack com mais de 2 anos de experiência no ciclo completo de desenvolvimento, transformando sistemas legados em soluções escaláveis e arquiteturas de microsserviços.',
      impactTitle: 'Experiência de Impacto',
      impactIntro: 'Na Pricefy by Selbetti, atuo na linha de frente da evolução tecnológica:',
      impactItems: [
        {
          title: 'Arquitetura',
          description:
            'Projetos de APIs RESTful escaláveis em .NET Core, migrando arquiteturas monolíticas para modelos baseados em microsserviços.',
        },
        {
          title: 'Integração Massiva',
          description:
            'Desenvolvimento de conectores em C# para integração de grandes volumes de dados entre ERPs de clientes e a plataforma Pricefy.',
        },
        {
          title: 'Observabilidade',
          description:
            'Implementação de mecanismos avançados de logs para monitoramento e rastreabilidade total das integrações.',
        },
        {
          title: 'Qualidade Técnica',
          description:
            'Aplicação rigorosa de SOLID, TDD e boas práticas de código, utilizando Azure DevOps para gestão de fluxo.',
        },
      ],
      educationTitle: 'Formação e Idiomas',
      educationCourse: 'CST em Tecnologia',
      educationInstitution: 'Centro Universitário FMU | FIAM-FAAM',
      languageBadge: 'Inglês - C1 (Avançado)',
      summaryPrefix:
        'Minha trajetória combina a precisão técnica do desenvolvimento com a visão estratégica de quem já atuou como ',
      summaryHighlight: 'Analista de Implantação',
      summarySuffix: ', unindo experiência, comunicação e foco total no resultado.',
      skills: [
        {
          title: 'Back-end & Cloud',
          value: '.NET Core, C#, Entity Framework, AWS (Lambda, Fargate, S3, Step Functions)',
        },
        {
          title: 'Front-end',
          value: 'Angular, React, TypeScript, SASS/SCSS',
        },
        {
          title: 'Expertise',
          value: 'Microsserviços, SOLID, TDD, Integração de Sistemas, Monitoramento/Logs',
        },
      ],
      socialLinks: SOCIAL_LINKS,
      cta: 'Pronto para novos desafios de arquitetura e desenvolvimento. Vamos conversar?',
    },
    modal: {
      closeAriaLabel: 'Fechar detalhes do projeto',
      imageAltLabel: 'imagem',
      browserNoVideo: 'Seu navegador não suporta vídeos.',
    },
  },
  en: {
    meta: {
      title: 'Douglas Gomes | Technical Versatility',
    },
    languageSwitcher: {
      label: 'Language',
      languages: {
        'pt-BR': 'PT',
        en: 'EN',
      },
    },
    hero: {
      title: 'Technical Versatility',
      subtitle: 'From IoT Automation to Scalable Cloud',
      description: 'Software engineering applied across different technology ecosystems',
      secondaryAction: 'Chat on WhatsApp',
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'A selection of solutions built for different technical contexts',
      openProjectPrefix: 'Open project details for',
      items: [
        {
          id: 1,
          title: 'IoT System: Precision Scale with BMI Lookup',
          shortDescription:
            'Development of a smart scale with real-time BMI calculation and telemetry.',
          technologies: ['C++', 'Arduino', 'HX711 (ADC)', 'ESP8266/ESP32', 'Sensors'],
          imageUrl: 'IOT1.png',
          imageUrl2: 'image.png',
          video: 'GRAVADO.mp4',
          detailedSpecs: `This project is a smart scale that performs BMI (Body Mass Index) lookup automatically. Based on the detected weight and the configured height, the system processes the calculation and returns the result on a digital display.

Components and Hardware:
• Microcontroller: Arduino / ESP
• Custom phenolic board
• Temperature sensor (used for standby mode)
• Load cell (scale)
• HX711 converter (ADC - Analogic Digital Converter)
• 7805 voltage regulator
• 9V 250mA transformer

Energy Efficiency and Consumption:
The project was optimized for real efficiency, considering that the ESP consumes around 150mA with the selected transformer. Analyzing the actual current draw was essential to guarantee voltage regulator stability and ADC reading accuracy.`,
        },
        {
          id: 2,
          title: 'Beam Calculator for Production',
          shortDescription:
            'C# application for beam sizing, material estimation and total cost reporting.',
          technologies: ['C#', '.EXE'],
          imageUrl: 'beam-calculator-overview.jpeg',
          imageUrl2: 'beam-calculator-report.jpeg',
          detailedSpecs: `This beam calculator was built to automate the production process based on the measurements provided by the client. The application receives clear span, top width, base width and material type, then processes the number of beams, total linear meters and the estimated amount of required material.

It also generates a final report with the length of each beam, total production, price per linear meter and total order cost, with the option to send it directly to the default Windows printer.`,
        },
        {
          id: 3,
          title: 'POC: WhatsApp Quotation Automation',
          shortDescription:
            'The store could not attend every customer — the automation ensures no one goes unanswered, keeping interest alive until a human agent takes over.',
          technologies: ['.NET 8', 'Minimal API', 'WhatsApp Webhook', 'Vite', 'HTML/CSS'],
          imageUrl: 'Automação_whatsapp.jpeg',
          video: 'Automação_whatsapp.mp4',
          detailedSpecs: `Problem solved:
The store was receiving more contacts than it could handle at the same time. Customers left unanswered simply walked away. The automation acts as a first service layer: it collects quotation data through a guided conversation and keeps the customer engaged until a human agent is ready to take over.

How the technologies work together:
The customer sends a message on WhatsApp → Meta delivers that event via webhook to the POST /whatsapp/webhook endpoint on the .NET 8 Minimal API → the server identifies the customer's session by phone number using an in-memory ConcurrentDictionary → the state machine (ConversationStage enum) determines which step of the conversation that number is at and what reply to send → the API calls back the WhatsApp API to deliver the message to the customer.

The simulator (Vite + plain HTML/CSS) points to the POST /simulator/messages endpoint on the same API, making it possible to test the full flow without depending on real WhatsApp. The business logic is identical in both paths — only the message source differs.

Collection flow:
• Product → Quantity → Delivery type → Registration data (name, address, phone)
• Every free-text field requires customer confirmation before moving forward, preventing typos from entering the quotation
• Audio messages are detected and the customer receives an active response with two options: type the answer or speak to an agent
• At the end, a full summary is sent to the customer before the automated session closes`,
        },
      ],
    },
    presentation: {
      title: 'Professional Journey',
      highlight:
        'I am Douglas Gomes, 26 years old, working as a .NET Full Stack Developer with more than 2 years of experience across the full software lifecycle, turning legacy systems into scalable solutions and microservices architectures.',
      impactTitle: 'Impactful Experience',
      impactIntro: 'At Pricefy by Selbetti, I work on the front line of technological evolution:',
      impactItems: [
        {
          title: 'Architecture',
          description:
            'Scalable RESTful API projects in .NET Core, migrating monolithic architectures to microservices-based models.',
        },
        {
          title: 'Large-Scale Integration',
          description:
            'Development of C# connectors to integrate high volumes of data between client ERPs and the Pricefy platform.',
        },
        {
          title: 'Observability',
          description:
            'Implementation of advanced logging mechanisms for full monitoring and traceability across integrations.',
        },
        {
          title: 'Technical Quality',
          description:
            'Strict application of SOLID, TDD and engineering best practices, using Azure DevOps to manage delivery flow.',
        },
      ],
      educationTitle: 'Education and Languages',
      educationCourse: 'Associate Degree in Technology',
      educationInstitution: 'FMU University Center | FIAM-FAAM',
      languageBadge: 'English - C1 (Advanced)',
      summaryPrefix:
        'My background combines the technical precision of software development with the strategic perspective of someone who has also worked as an ',
      summaryHighlight: 'Implementation Analyst',
      summarySuffix: ', bringing together experience, communication and strong delivery focus.',
      skills: [
        {
          title: 'Back-end & Cloud',
          value: '.NET Core, C#, Entity Framework, AWS (Lambda, Fargate, S3, Step Functions)',
        },
        {
          title: 'Front-end',
          value: 'Angular, React, TypeScript, SASS/SCSS',
        },
        {
          title: 'Expertise',
          value: 'Microservices, SOLID, TDD, Systems Integration, Monitoring/Logs',
        },
      ],
      socialLinks: SOCIAL_LINKS,
      cta: "Ready for new architecture and development challenges. Let's talk?",
    },
    modal: {
      closeAriaLabel: 'Close project details',
      imageAltLabel: 'image',
      browserNoVideo: 'Your browser does not support videos.',
    },
  },
};
