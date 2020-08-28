import {filterRole, filterDifficulty, filterName, calc} from '../src/data.js';
const duplaNA = [
  {
    id: "Amanda",
    name: "Amanda",
    info: {
      difficulty: 4
    },
    tags: ["Fighter", "Tank"]
  }, 
  {
    id: "Nicole",
    name: "Nicole",
    info: {
      difficulty: 5
    },
    tags: ["Mage", "Assassin"]
  },
  {
    id: "God",
    name: "God",
    info: {
      difficulty: 9
    },
    tags: ["Mage", "Support"]
  }
];

describe('Function filter characters by role', () => {
  it('is a function', () => {
    expect(typeof filterRole).toBe('function');
  });
  it('Retuns characters with selected role', () => {
  expect(filterRole(duplaNA,"Assassin")).toEqual([{
    id: "Nicole",
    name: "Nicole",
    info: {
      difficulty: 5
    },
    tags: ["Mage", "Assassin"]
    }]);
  });
});

describe('Function filter characters by difficulty', () => {
  it('is a function', () => {
    expect(typeof filterDifficulty).toBe('function');
  });
  it('Retuns characters with easy difficulty', () => {
    expect(filterDifficulty(duplaNA,"easy")).toEqual(
      [{
        id: "Amanda",
        name: "Amanda",
        info: {
          difficulty: 4
        },
        tags: ["Fighter", "Tank"]
      }]
    );
  });
  it('Retuns characters with medium difficulty', () => {
    expect(filterDifficulty(duplaNA,"medium")).toEqual(
      [{
        id: "Nicole",
        name: "Nicole",
        info: {
          difficulty: 5
        },
        tags: ["Mage", "Assassin"]
      }]
    );
  });
  it('Retuns characters with hard difficulty', () => {
    expect(filterDifficulty(duplaNA,"hard")).toEqual(
      [{
        id: "God",
        name: "God",
        info: {
          difficulty: 9
        },
        tags: ["Mage", "Support"]
      }]
    );
  });
  it('Retuns all characters when no difficulty is selected', () => {
    expect(filterDifficulty(duplaNA,"")).toEqual(
      duplaNA
    );
  });
});

describe('Filter characters by name', () => {
  it('is a function', () => {
    expect(typeof filterName).toBe('function');
  });
  it('Retuns characters with typed name', () => {
    expect(filterName(duplaNA,"God")).toEqual([{
      id: "God",
      name: "God",
      info: {
        difficulty: 9
      },
      tags: ["Mage", "Support"]
    }]);
  });
});

describe('Calculo agregado', () => {
  it('is a function', () => {
    expect(typeof calc).toBe('function');
  });
  it('Retuns percentage of champs', () => {
  expect(calc(3, 1)).toEqual("33")
  });
});
