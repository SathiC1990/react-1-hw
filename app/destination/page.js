"use client";

import { useState } from "react";

import styles from "@/components/destination/destination.module.css";
import { AddWishlistItem } from "@/components/destination/AddWishlistItem";
import { planetWishlistItem } from "@/components/destination/planetWishListItem";
import planetsNames from "@/app/destination/planetsData";

// TASK - React 1 week 2
// Move this to its own file
/*const PlanetWishlistItem = ({
  name,
  onRemove,
  thumbnail,
}) => {
  return (
    <div className={styles.wishlistItem}>
      <img className={styles.wishlistItemThumbnail} src={thumbnail} alt="" />
      <b>{name.toUpperCase()}</b>
      <button onClick={onRemove}>remove</button>
    </div>
  );
}*/
const PlanetCard = ({
  name,
  description,
  thumbnail,
  isSelected,
  onAddOrRemovePlanet,
  index,
}) => {
  return (
    <div className={styles.planetCard}>
      <img
        className={styles.planetThumbnail}
        src={thumbnail}
        alt={`${name} thumbnail`}
      />
      <div className={styles.planetDescription}>
        <h2>
          {name.toUpperCase()} {isSelected ? "- SELECTED" : ""}
        </h2>
        <p>{description}</p>
      </div>
      <button
        className="roundButton"
        onClick={() => onAddOrRemovePlanet(name, index)}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

export const Destinations = () => {
  const [selectedPlanets, onAddPlanet] = useState([]);
  const numberOfPlanets = selectedPlanets.length;

  /*let isPlanetSelected = false;
  let numberOfPlanets = 0;*/

  const onAddOrRemovePlanet = (name, index) => {
    const isAlreadySelected = selectedPlanets.includes(name);
    let updatedSelection;
    if (isAlreadySelected) {
      updatedSelection = selectedPlanets.filter((planet) => planet !== name);
    } else {
      updatedSelection = [...selectedPlanets, name];
    }
    onAddPlanet(updatedSelection);
    /*console.log(
      `You selected the following planet: ${name}, with index: ${index}`
    );*/
  };

  // TASK - React 1 week 2
  // Implement this function
  // If you press the "ADD PLANET" the selected planet should display "SELECTED"
  // And the counter should update, how many planets are selected (numberOfPlanets)

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>
        <section className="card">
          <h2>Wishlist</h2>
          {/* TASK - React 1 week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}
          {/* <p>No planets in wishlist :(</p>
          <p>You have {numberOfPlanets} in your wishlist</p>*/}
          {selectedPlanets.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <>
              <p>You have {selectedPlanets.length} planets in your wishlist</p>
              <ul>
                {selectedPlanets.map((planet) => (
                  <li key={planet}>{planet}</li>
                ))}
              </ul>
            </>
          )}
          <b>List coming soon after lesson 3!</b>

          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        </section>
        <section className="card">
          <h2>Possible destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}

          {planetsNames.map((planet, index) => (
            <PlanetCard
              key={planet.id}
              name={planet.name}
              description={planet.description}
              thumbnail={`/destination/image-${planet.id}.png`}
              isSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={onAddOrRemovePlanet}
              index={index}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
