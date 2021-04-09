const mkdirp = require('mkdirp');

export class Generator {
  
  // Basic schema of folder structure.
  private structure: Object = {
    'core': ['guards', 'interceptors', 'models', 'services'],
    'modules': ['index'],
    'shared': ['components', 'libs']
  }

  /**
   * Generate folder structure.
   * 
   * @returns void
   */
  public generate(): void {
    for (const [key, value] of Object.entries(this.structure)) {
      for (const [keySecond,valueSecond] of Object.entries(value)) {   
        mkdirp(key + '/' + valueSecond);
      }
    }
    console.log('You have successfully created the folders');
  }

}