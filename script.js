
const livros = ['O Iluminado', 'O Conde de Monte Cristo', 'O Colecionador'];
  
const autores = new Map
([
    ['Coraline', 'Terror'],
    ['O Conde de Monte Cristo', 'Alexandre Dumas'],
    ['O Colecionador', 'Jonh Fowles']
]);


const generos = new Set(['Suspense', 'Drama', 'Romance']);


function adicionarLivro(titulo, autor, genero)
{
    if (!livros.includes(titulo))
    {
        livros.push(titulo);
        autores.set(titulo, autor);
        generos.add(genero);

        console.log(`O livro "${titulo}" foi adicionado.`);
    }
    else
    {
        console.log(`O livro "${titulo}" já existe na biblioteca.`);
    }
}


function removerLivro(titulo)
{
    const index = livros.indexOf(titulo);
    if (index !== -1)
    {
        livros.splice(index, 1);
        autores.delete(titulo);

        console.log(`O livro "${titulo}" foi removido.`)
    }
    else
    {
        console.log(`O livro "${titulo}" não está na biblioteca.`)
    }
}


function listarLivros() 
{
    console.log("Livros disponíveis:");
    livros.forEach(titulo => {
        console.log(`- ${titulo} (Autor: ${autores.get(titulo)})`);
    });
}


function verificarDisponibilidade(titulo) 
{
    if (livros.includes(titulo)) 
    {
        console.log(`O livro "${titulo}" está disponível.`);
        return true;
    } 
    else 
    {
        console.log(`O livro "${titulo}" não está disponível.`);
        return false;
    }
}
const livrosGeneros = new Map([
    ['Coraline', 'Terror'],
    ['O Conde de Monte Cristo', 'Romance'],
    ['O Colecionador', 'Suspense']
]);

function buscarLivrosPorGenero(genero) 
{
    console.log(`Buscando livros por gênero "${genero}": `);
    const livrosPorGenero = Array.from(livrosGeneros.entries())
        .filter(([titulo, gen]) => gen === genero)
        .map(([titulo]) => titulo);

    if (livrosPorGenero.length > 0)
    {
        livrosPorGenero.forEach(titulo => console.log(`- ${titulo}`));
        return livrosPorGenero;
    }
    else
    {
        console.log("Nenhum livro encontrado nesse gênero.")
        return [];
    }
}

adicionarLivro('O Iluminado', 'Stephen King', 'Romance');

removerLivro('O Conde de Monte Cristo');

listarLivros();

verificarDisponibilidade('Coraline');

buscarLivrosPorGenero('Terror');