/**
  The Prototype Pattern is a creational design pattern that allows an object to copy itself.

  It involves creating a new object as a clone of an existing object.
 */

// Step 1: Create a Prototype

// Create a Cloneable interface
interface Cloneable {
  clone(): Cloneable;
}

// Create a GameObject class that implements Cloneable
class GameObject implements Cloneable {
  constructor(private sprite: string, private position: number) {}

  clone() {
    return new GameObject(this.sprite, this.position);
  }

  describe() {
    console.log(`Sprite: ${this.sprite}, Position: ${this.position}`);
  }
}

// Step 2: Clone the Prototype

// Create a new object from GameObject
const alien = new GameObject("alien.png", 0);
alien.describe(); // Outputs: Sprite: alien.png, Position: 0

// Clone the object
const clonedAlien = alien.clone();
clonedAlien.describe(); // Outputs: Sprite: alien.png, Position: 0
