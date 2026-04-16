export class Robot {
  private robotName: string | undefined
  constructor() {}

  private static usedNames = new Set<string>()

  private setName(): string {
    let name: string;

    do {
    const firstLetter = Math.floor(Math.random() * (90-65+1) + 65)
    const secondLetter = Math.floor(Math.random() * (90-65+1) + 65)

    const letters = String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter)
    const numbers = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0')
    name = `${letters}${numbers}`
    } while (Robot.usedNames.has(name));
    Robot.usedNames.add(name)
    return name
  }

  public get name(): string {
      if (this.robotName) {
        return this.robotName
      } else {
        this.robotName = this.setName()
        return this.robotName
      }
  }

  public resetName(): void {
    this.robotName = undefined
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }
}
