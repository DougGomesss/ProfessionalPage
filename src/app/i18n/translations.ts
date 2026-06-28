import { PortfolioContent } from './portfolio-content';

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
    nav: {
      sobre: 'SOBRE',
      trabalhos: 'TRABALHOS',
      produtos: 'PRODUTOS',
    },
    sobre: {
      description:
        'Desenvolvedor .NET Full Stack com mais de 2 anos de experiência em sistemas de produção, integrações e microsserviços. Atuo na interseção entre Engenharia eletrônica ao Desenvolvimento de software.',
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
    produtos: {
      comingSoon: 'Em breve',
      description:
        'Eletrônicos',
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
    nav: {
      sobre: 'ABOUT',
      trabalhos: 'WORKS',
      produtos: 'PRODUCTS',
    },
    sobre: {
      description:
        '.NET Full Stack Developer with over 2 years of experience in production systems, integrations, and microservices. I work at the intersection of Electronic Engineering and Software Development.',
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
    produtos: {
      comingSoon: 'Coming soon',
      description:
        'Electronics',
    },
    modal: {
      closeAriaLabel: 'Close project details',
      imageAltLabel: 'image',
      browserNoVideo: 'Your browser does not support videos.',
    },
  },
};
