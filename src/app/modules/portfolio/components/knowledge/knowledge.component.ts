import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Iknowledge[]>([
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de python',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone de conhecimento de docker',
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Ícone de conhecimento de postgresql',
    },
    {
      src: 'assets/icons/knowledge/django.svg',
      alt: 'Ícone de conhecimento de django',
    },
    {
      src: 'assets/icons/knowledge/drf.svg',
      alt: 'Ícone de conhecimento de rest framework',
    },
    {
      src: 'assets/icons/knowledge/git.svg',
      alt: 'Ícone de conhecimento de git',
    },
  ]);
}
