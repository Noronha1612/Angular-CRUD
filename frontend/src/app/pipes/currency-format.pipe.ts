import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const numberParts = value.toFixed(2).split('.');

    const s = numberParts[0];
    const i = s.length % 3;
    const parts = i ? [ s.substr( 0, i ) ] : [];
    for( let ind = i; ind < s.length ; ind += 3 )
    {
        parts.push( s.substr( i, 3 ) );
    }

    return `R$ ${parts.join('.')},${numberParts[1]}`;
  }

}
