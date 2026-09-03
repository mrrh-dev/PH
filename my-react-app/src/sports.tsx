import SportCard from './sportcard';
import type { SportType } from './type';

const sports: SportType[] = [
  { name: 'cricket', players: 11 },
  { name: 'football', players: 11 },
  { name: 'badminton', players: 2 },
];

export default function Sports() {
  return (
    <>
      {sports.map((sport) => (
        <SportCard name={sport.name} players={sport.players}></SportCard>
      ))}
    </>
  );
}
