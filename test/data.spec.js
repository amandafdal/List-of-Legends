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

describe('Function difficulty', () => {
  it('is a object', () => {
    expect(typeof filterDifficulty).toBe('object');
  });
    describe('Function difficulty.easy', () => {
      it('is a function', () => {
        expect(typeof filterDifficulty.easy).toBe('function');
      });
      it('returns `difficulty.easy`', () => {
        expect(filterDifficulty.easy(duplaNA, 4)).toEqual([{
          id: "Amanda",
          name: "Amanda",
          info: {
            difficulty: 4
          },
          tags: ["Fighter", "Tank"]
        }]);
      });
    });  
    describe('Function difficulty.medium', () => {
      it('is a function', () => {
        expect(typeof filterDifficulty.medium).toBe('function');
      });
        it('returns `difficulty.medium`', () => {
          expect(filterDifficulty.medium(duplaNA, 4, 7)).toEqual([{
            id: "Nicole",
            name: "Nicole",
            info: {
              difficulty: 5
            },
            tags: ["Mage", "Assassin"]
          }]);
        });
    });
    describe('Function difficulty.hard', () => {
      it('is a function', () => {
        expect(typeof filterDifficulty.hard).toBe('function');
      });
      it('returns `difficulty.hard`', () => {
        expect(filterDifficulty.hard(duplaNA, 8)).toEqual([{
          id: "God",
          name: "God",
          info: {
            difficulty: 9
          },
          tags: ["Mage", "Support"]
        }]);
      });
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
