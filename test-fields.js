
const DIRECTUS_URL = 'http://directus-m13sy2xuxdvexo8jenelh83f.187.124.39.245.sslip.io/';

async function testDirectus() {
    try {
        const res = await fetch(`${DIRECTUS_URL}items/servicos?fields=*`);
        const data = await res.json();
        
        if (data.data && data.data.length > 0) {
            const fields = Object.keys(data.data[0]);
            console.log('LISTA_DE_CAMPOS');
            fields.forEach(f => console.log('CAMPO:', f));
            console.log('FIM_LISTA');
        }
    } catch (err) {}
}

testDirectus();
