export class LogBody {
  constructor(value: string = '') {
    this.value = value;
  }

  public targetRoute: string = '';
  public value: string = '';
}
