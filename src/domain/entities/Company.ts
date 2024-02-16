
export class Company {
    public constructor(
        public id: string,
        public readonly name: string,
        public readonly created_at: Date,
        public readonly updated_at: Date
    ){}
}