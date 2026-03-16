import indexPageData from './pages/indexpage';

const getData = (page)=>{
    console.log(`Cargando la data de página ${page}`);
    switch (page){
        case "/index.html":
            return indexPageData;
    }
    return {};
}

export default getData;