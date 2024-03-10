import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
})
export class ActiveComponent implements OnInit {
  query : any;
  constructor(private route : ActivatedRoute, private service : RequestService, private router : Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['token'];
    });
    this.service.activeMessageRequest(this.query);
    this.service.getDataRequest('active').subscribe(data => {
      if(data.status) this.router.navigate(['/login']);
      else this.router.navigate(['/error']);
    })
  }
}
