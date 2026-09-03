import type { SportType } from './type';

export default function SportCard({ name, players }: SportType) {
  return (
    <>
      <h2>{name}</h2>
      <p>{players}</p>
    </>
  );
}
