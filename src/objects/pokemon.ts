class Pokemon {
    protected _healthPoints: number = 0;

    protected _imgSrc: string|null = null;

    protected _name: string;

    protected _statAttack: number = 0;

    protected _statDefense: number = 0;

    protected _statSpeed: number = 0;

    protected _types: any[] = [];

    constructor(name: string) {
        this._name = name;
    }

    get healthPoints(): number {
        return this._healthPoints;
    }

    set healthPoints(healthPoints: number) {
        this._healthPoints = healthPoints;
    }

    get imgSrc(): string|null {
        return this._imgSrc;
    }

    set imgSrc(imgSrc: string|null) {
        this._imgSrc = imgSrc;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get statAttack(): number {
        return this._statAttack;
    }

    set statAttack(statAttack: number) {
        this._statAttack = statAttack;
    }

    get statDefense(): number {
        return this._statDefense;
    }

    set statDefense(statDefense: number) {
        this._statDefense = statDefense;
    }

    get statSpeed(): number {
        return this._statSpeed;
    }

    set statSpeed(statSpeed: number) {
        this._statSpeed = statSpeed;
    }

    get types(): any[] {
        return this._types;
    }

    set types(types: any[]) {
        this._types = types;
    }
}

export default Pokemon;
