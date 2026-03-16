
const DIRECTUS_URL = 'http://directus-m13sy2xuxdvexo8jenelh83f.187.124.39.245.sslip.io/';

async function testDirectus() {
    try {
        console.log('--- TESTE 1: Apenas Títulos ---');
        const res1 = await fetch(`${DIRECTUS_URL}items/servicos?fields=title`);
        const data1 = await res1.json();
        if (data1.errors) console.log('ERRO TESTE 1:', data1.errors[0].message);
        else console.log('SUCESSO TESTE 1: Itens encontrados:', data1.data?.length);

        console.log('\n--- TESTE 2: Todos os campos exceto image ---');
        const res2 = await fetch(`${DIRECTUS_URL}items/servicos?fields=title,slug,description,icon`);
        const data2 = await res2.json();
        if (data2.errors) console.log('ERRO TESTE 2:', data2.errors[0].message);
        else console.log('SUCESSO TESTE 2: Itens encontrados:', data2.data?.length);

        console.log('\n--- TESTE 3: Apenas campo image ---');
        const res3 = await fetch(`${DIRECTUS_URL}items/servicos?fields=image`);
        const data3 = await res3.json();
        if (data3.errors) console.log('ERRO TESTE 3:', data3.errors[0].message);
        else console.log('SUCESSO TESTE 3: Itens encontrados:', data3.data?.length);

    } catch (err) {
        console.error('ERRO FATAL:', err.message);
    }
}

testDirectus();
