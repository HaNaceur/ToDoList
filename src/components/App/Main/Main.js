function Main({ tasks }) {

  
    return (
      <main className="container main">
        <h2>La recette:</h2>
        <p>Liste des ingredients</p>
        <ul className="ingredients">
          {/* On peux créer le tableau en dehors et l'ajouter dans le JSX */}
          {/* {itemsList} */}
          {/* Ou directement faire le .map dans le JSX */}
          {tasks.map((tasks, index) => ( // on boucle sur chaque string ingredient, et on retourne un nouveau tableau composé de <li>
            <li
              key={task} 
            >
              {tasks}
            </li>
          ))}
        </ul>
      </main>
    );
  }
  
  export default Main;
  