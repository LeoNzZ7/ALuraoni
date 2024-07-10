import cardapio from "data/cardapio.json"
import styles from "./inicio.module.scss"

export const Inicio = () => {
    let pratosRecomendados = [...cardapio];
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
    // Função que embaralha o array do cardápio e retorna apenas 3 pratos.

    return (
        <section>
            <h3 className={styles.titulo} >
                Recomendações da cozinha
            </h3>
            <div className={styles.recomendados} >
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.recomendado} >
                        <div className={styles.recomendado__imagem} >
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao} >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}