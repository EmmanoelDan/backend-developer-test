export interface IUseCase<TInput, TOutput> {
    execute(inpute: TInput): Promise<TOutput>;
}