import cardapio from "data/cardapio.json"
import styles from "./inicio.module.scss"
import stylesTema from 'styles/tema.module.scss'
import { useNavigate } from "react-router-dom"
import { Prato } from "types/Prato"

export const Inicio = () => {
    const navigate = useNavigate()

    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    // Função que embaralha o array do cardápio e retorna apenas 3 pratos.

    const redirecionarParaDetalhes = (prato: Prato) => {
        navigate(`prato/${prato.id}`, { state: { prato } });
    };
    //Função que direciona para o prato selecionado com base e seu id e passa suas informações.

    return (
        <section>
            <h3 className={stylesTema.titulo} >
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados} >
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado} >
                        <div className={styles.recomendado__imagem} >
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button
                            onClick={() => redirecionarParaDetalhes(item)}
                            className={styles.recomendado__botao}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}>Nossa casa</h3>
            <div className={styles.nossaCasa}>
                <img src="/nossa_casa.png" alt="casa do aluroni" />
                <div className={styles.nossaCasa__endereco}>
                    Rua vergueiro 3185 <br /> <br /> Villa Mariana - SP
                </div>
            </div>
        </section>
    );
}