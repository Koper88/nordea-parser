import { Component, OnInit } from '@angular/core';
import { TextParserService } from './text-parser.service';

@Component({
  selector: 'app-text-parser',
  templateUrl: './text-parser.component.html',
  styleUrls: ['./text-parser.component.css']
})
export class TextParserComponent implements OnInit {

  inputText = '  Mary   had a little  lamb  .Peter   called for the wolf   ,  and Aesop came .Cinderella  likes shoes.';
  outputText = '';
  outputTextType = '';

  constructor(private textParserService: TextParserService) { }

  ngOnInit(): void {
  }

  getParsedStringXML(): void {
    this.textParserService.getParsedStringXML(this.inputText)
      .subscribe(outputText => {
        this.outputText = outputText;
        this.outputTextType = 'XML';
      });
  }
  getParsedStringCSV(): void {
    this.textParserService.getParsedStringCSV(this.inputText)
      .subscribe(outputText => {
        this.outputText = outputText;
        this.outputTextType = 'CSV';
      });
  }

}
