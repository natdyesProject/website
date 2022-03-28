import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";
@Component({
  selector: "app-works-carousel",
  templateUrl: "./works-carousel.component.html",
  styleUrls: ["./works-carousel.component.scss"]
})
export class WorksCarouselComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      photo: "./assets/images/landing/products/products9.svg",
      text: `Una Plataforma para la administración de bodegas en sus instalaciones o externalizadas`,
      title: "Plataforma Samai"
    },
    {
      photo: "./assets/images/landing/products/products11.svg",
      text: `Software que a través de Computer Vision analiza el tiempo efectivo en ciertas actividades`,
      title: "Time On Tools"
    },
    {
      photo: "./assets/images/landing/products/products15.svg",
      text: `Bodegas que a través de I.A., IOT y Business Inteligence, entregan mayor valor a sus usuarios`,
      title: "Bodega Inteligente"
    },
    {
      photo: "./assets/images/landing/products/products17.svg",
      text: `Precintos de seguridad, que otorgan información y seguridad, siempre conectados a internet`,
      title: "Precinto IOT"
    },
    {
      photo: "./assets/images/landing/products/products13.svg",
      text: `Análisis de volumen de datos, para prevenir problemas y tomar mejores decisiones estratégicas`,
      title: "Big Data Forecast"
    },
    {
      photo: "./assets/images/landing/products/products12.svg",
      text: `Single Page Aplications y Websites, que mejoran la experiencia de usuario y su despliegue en plataformas móviles`,
      title: "SPA Website"
    }
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  ngOnInit() {}
}
