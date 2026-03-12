export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const posts: BlogPost[] = [
  {
    slug: '5-dicas-manter-casa-limpa',
    title: '5 Dicas para Manter a Casa Limpa Mais Tempo',
    excerpt: 'Descubra os segredos dos profissionais para prolongar a sensação de limpeza no seu lar, poupando tempo e esforço.',
    content: `Manter a casa limpa nem sempre é fácil, mas com certas rotinas pode reduzir o tempo que perde em limpezas profundas.

    **1. A regra dos 15 minutos**
    Dedique apenas 15 minutos por dia, antes de dormir, para arrumar as áreas principais (cozinha e sala).

    **2. Limpe logo a seguir**
    A sujidade recente é sempre mais fácil de limpar. Sujou o fogão? Limpe de imediato. Deixou cair algo no chão? Aspire logo.

    **3. Foco nos pontos críticos**
    Mantenha as bancadas da cozinha e o lavatório da casa de banho sempre limpos. Estes pequenos detalhes dão um ar de limpeza a toda a casa.
    
    A Brilho Impecável está sempre disponível caso prefira deixar limpezas maiores para nós!`,
    date: '12 Março 2026',
    category: 'Dicas Práticas',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe4c12ea66?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'produtos-ecologicos-limpeza',
    title: 'Produtos Ecológicos: Vale a pena usar?',
    excerpt: 'Analisamos os prós e contras das soluções de limpeza sustentáveis e como elas afetam a saúde da sua família.',
    content: `Os produtos ecológicos têm ganho destaque e por bons motivos. Reduzem a nossa pegada ecológica e protegem a saúde respiratória e dermatológica de quem vive na casa.
    
    Ingredientes como o vinagre branco, bicarbonato de sódio e limão são alternativas formidáveis para combater gorduras, odores e nódoas, custando muitas vezes menos do que soluções comerciais.
    
    Na Brilho Impecável, usamos soluções amigas do ambiente em 90% das nossas operações diárias.`,
    date: '5 Março 2026',
    category: 'Sustentabilidade',
    image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'escritorio-produtivo',
    title: 'Como Preparar o Seu Escritório para a Primavera',
    excerpt: 'A limpeza de primavera chegou. Aprenda a organizar e higienizar o espaço de trabalho para aumentar a motivação da equipa.',
    content: `Um ambiente de trabalho higienizado reflete-se na produtividade dos colaboradores. Com a primavera à porta, sugerimos uma limpeza profunda que vai além da manutenção diária.
    
    **Janelas e Luz Natural:** Melhore a claridade lavando as janelas por dentro e fora. A luz natural melhora o humor.
    **Teclados e Monitores:** Os teclados acumulam mais bactérias do que se julga. Use produtos desinfetantes próprios para maquinaria.
    **Triagem de Papel:** Deite fora documentos antigos (ou recicle).`,
    date: '28 Fevereiro 2026',
    category: 'Empresarial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'limpar-chao-flutuante',
    title: 'Erros Comuns ao Limpar o Chão Flutuante',
    excerpt: 'O seu pavimento flutuante está a ficar baço? Conheça os erros mais comuns e saiba como devolver-lhe o brilho original.',
    content: `Os pavimentos flutuantes exigem um carinho especial. Estes são os três maiores erros que vemos nas casas portuguesas:
    
    **Erro 1: Água em excesso**
    O flutuante não é amigo da água. Lavar com esfregonas encharcadas causa inchaço nas juntas e degradação a longo prazo.
    
    **Erro 2: Produtos Abrasivos**
    Lixívias e detergentes fortes retiram o verniz protetor do material, tornando-o opaco.
    
    **A Solução Correta:** Use apenas uma esfregona muito espremida e um detergente com Ph Neutro específico para madeiras/flutuantes.`,
    date: '15 Fevereiro 2026',
    category: 'Geral',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    slug: 'limpeza-pos-obra-guia',
    title: 'O Guia Definitivo da Limpeza Pós-Obra',
    excerpt: 'Terminou as obras mas a casa está inabitável? Saiba por onde começar a limpeza do pó incrustado.',
    content: `Todos sabemos que após a saída dos empreiteiros, fica uma quantidade absurda de pó, mesmo quando pensamos que não.
    
    A melhor estratégia passa sempre por limpar "De cima para baixo". Teto, candeeiros, paredes, armários por dentro e só depois pavimentos.
    
    Esta é a fase em que o aspirador industrial entra em ação e é imprescindível face a um aspirador doméstico comum.`,
    date: '10 Fevereiro 2026',
    category: 'Pós-Obra',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=800&auto=format&fit=crop'
  }
];
