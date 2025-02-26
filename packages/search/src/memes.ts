import {
  Card,
  Class,
  Format,
  Hero,
  Rarity,
  Release,
  Subtype,
  Treatment,
  Type,
} from "@flesh-and-blood/types";

interface Meme {
  keyword: string;
  card: Card;
}

const fangsALot: Card = {
  artists: ["Hoodwill"],
  cardIdentifier: "fangs-a-lot-blue",
  classes: [Class.Generic],
  defaultImage: "FNG000",
  functionalText: `If Fangs A Lot is put into your banished zone from your graveyard, instead put it into your hand.`,
  legalFormats: [],
  legalHeroes: [Hero.Kayo, Hero.Levia, Hero.Rhinar],
  printings: [
    {
      artists: ["Hoodwill"],
      identifier: "FNG000",
      image: "FNG000",
      print: "FNG000",
      rarity: Rarity.Rare,
      set: Release.Promos,
    },
    {
      artists: ["Hoodwill"],
      identifier: "FNG000",
      image: "FNG000_Marvel",
      print: `FNG000-${Treatment.FA}`,
      rarity: Rarity.Marvel,
      set: Release.Promos,
      treatment: Treatment.FA,
    },
  ],
  name: "Fangs A Lot",
  rarities: [Rarity.Rare, Rarity.Marvel],
  rarity: Rarity.Rare,
  sets: [Release.Promos],
  setIdentifiers: ["FNG000"],
  specialImage: "FNG000_Marvel",
  subtypes: [Subtype.Attack],
  types: [Type.Action],
  typeText: "Generic Action - Attack",
};

export const memes: Meme[] = [
  { keyword: fangsALot.name.toLowerCase(), card: fangsALot },
];
