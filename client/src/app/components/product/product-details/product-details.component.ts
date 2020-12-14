import { Component, OnInit, Input } from '@angular/core';
import { IProductTagData } from '../../../interfaces/productTagData.interface';
import { Package } from '../../../models/package.model';
import { HttpClient } from '@angular/common/http';
import { originalOrder } from '../../../pipes/orginalOrder.pipe';
import packageConfig from '../../../assets/configs/packagesConfig.json';


@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http: HttpClient) {}

  @Input() details: IProductTagData[];
  @Input() package;

  public originalOrder = originalOrder;

  public packageData = {
    version: {
      title: "Latest version",
      data: null
    },
    firstRelease: {
      title: "First release",
      data: null
    },
    lastRelease: {
      title: "Last release",
      data: null
    },
    numberOfReleases: {
      title: "Number of releases",
      data: null
    },
    downloads: {
      title: "Downloads",
      data: null
    },
    licenses: {
      title: "Licenses",
      data: null
    }
  };

  ngOnInit(): void {
    switch(this.package.type) {
      case Package.hex:
        const apiLink = `${packageConfig.hex.url}/${this.package.name}`

        this.http.get(apiLink).subscribe((data: any) => {
          this.packageData.version.data = data.latest_version;
          this.packageData.firstRelease.data = data.releases[data.releases.length-1].inserted_at;
          this.packageData.lastRelease.data = data.releases[0].inserted_at;
          this.packageData.numberOfReleases.data = data.releases.length;
          this.packageData.downloads.data = data.downloads.all;
          this.packageData.licenses.data = data.meta.licenses;
        });
      break;
    }
  }

}
