export class Emperor {
  private static instance: Emperor;
  private constructor() {}

  static getInstance(): Emperor {
    if (!Emperor.instance) {
      Emperor.instance = new Emperor();
    }
    return Emperor.instance;
  }
}