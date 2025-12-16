import { CheckCircle2, Syringe, Star, ShieldCheck, Heart, Sparkles, MapPin, Phone, Mail, Instagram } from 'lucide-react';

export const EXPERT_DATA = {
  name: "Dra. Pamela Lima",
  role: "Cirurgiã Dentista",
  crosp: "155.123",
  email: "drapamelalimaa@gmail.com",
  instagram: "https://www.instagram.com/drapamelalimaa",
  whatsappLink: "https://api.whatsapp.com/send/?phone=5517992373867&text=Ol%C3%A1%2C+vim+diretamente+do+seu+website+e+gostaria+de+marcar+uma+consulta&type=phone_number&app_absent=0",
  address: {
    street: "Rua Antônio Toller, 368",
    neighborhood: "Jardim Paraíso",
    city: "Bebedouro",
    state: "SP",
    full: "Rua Antônio Toller, 368 – Jardim Paraíso, Bebedouro – SP"
  },
  mapLink: "https://www.google.com/maps/search/?api=1&query=Rua+Antônio+Toller,+368+Jardim+Paraíso+Bebedouro+SP"
};

export const IMAGES = {
  hero: "https://i.imgur.com/Au9o1l9.jpeg",
  whitening: [
    "https://i.imgur.com/RtE1Slo.jpeg",
    "https://i.imgur.com/1G6SmZv.jpeg",
    "https://i.imgur.com/PKgSfox.jpeg"
  ],
  fillers: [
    "https://i.imgur.com/GXpeUf9.jpeg",
    "https://i.imgur.com/aDBAhhN.jpeg",
    "https://i.imgur.com/TCpg3M7.jpeg"
  ],
  botox: [
    "https://i.imgur.com/GkhsN58.png",
    "https://i.imgur.com/IJSBoD0.jpeg",
    "https://i.imgur.com/2sP3ONI.jpeg"
  ]
};

export const SERVICES = [
  {
    title: "Clínica Geral",
    description: "Prevenção, diagnóstico e tratamento para manter sua saúde bucal em dia.",
    icon: ShieldCheck
  },
  {
    title: "Endodontia (Canal)",
    description: "Tratamento especializado para salvar dentes e aliviar dores com conforto.",
    icon: CheckCircle2
  },
  {
    title: "Prótese Dentária",
    description: "Reabilitação oral para devolver a função e a estética do seu sorriso.",
    icon: Star
  },
  {
    title: "Cirurgia Odontológica",
    description: "Procedimentos cirúrgicos realizados com segurança e técnicas minimamente invasivas.",
    icon: Heart
  },
  {
    title: "Harmonização Orofacial",
    description: "Equilíbrio estético e funcional da face para realçar sua beleza natural.",
    icon: Sparkles
  },
  {
    title: "Botox e Preenchimento",
    description: "Suavização de linhas de expressão e volumização labial com naturalidade.",
    icon: Syringe
  }
];

export const BENEFITS = [
  {
    title: "Atendimento Personalizado",
    description: "Cada paciente é único. Planejamos seu tratamento de acordo com suas necessidades específicas."
  },
  {
    title: "Procedimentos Seguros",
    description: "Biossegurança rigorosa e técnicas validadas para garantir sua saúde e tranquilidade."
  },
  {
    title: "Resultados Naturais",
    description: "Foco em realçar sua beleza sem exageros, mantendo a harmonia do seu rosto."
  },
  {
    title: "Conforto e Confiança",
    description: "Ambiente acolhedor e atendimento humanizado para que você se sinta bem cuidado."
  }
];