export class AccessPolicy {
  constructor() {
    this.roles = {
      hradmin: ['seeHrFront', 'seeInputs', 'seeBooklistOne', 'seeBooklistTwo'],
      coworker: ['seeCoworkerFront', 'seeBooklistTwo'],
    };
    this.user = localStorage.getItem('userMode');
  }

  //returnera true eller false
  showOrhide(section) {
    return this.roles[this.user].includes(section);

    //console.log('banan', section);
  }
}
