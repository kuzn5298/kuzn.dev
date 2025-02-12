---
id: conduit-angular
date: '2025-01-13T00:00:00.000Z'
title: 'Conduit'
version: 2.0
status: '2.0'
laptopPreviews: ['./previews/laptop_light_preview.png', './previews/laptop_dark_preview.png']
tabletPreviews: ['./previews/tablet_light_preview.png', './previews/tablet_dark_preview.png']
phonePreviews: ['./previews/phone_light_preview.png', './previews/phone_dark_preview.png']
main: true
priority: 3
github: 'https://github.com/kuzn5298/conduit-angular'
external: 'https://conduit.kuzn.dev/'
description: 'A frontend for a blogging platform based on the Conduit RealWorld API, enabling users to create, manage, and engage with articles.'
tags:
    - Angular
    - TypeScript
    - RxJS
---

## Project Goal

The primary goal of this project is to create a frontend application for a blogging platform based on the [Conduit RealWorld API specification](https://realworld-docs.netlify.app/specifications/frontend/api/). The application will allow users to read, create, and manage articles, as well as engage with the content by commenting, liking, and following authors.

**[Conduit RealWorld](https://realworld-docs.netlify.app/)** is a learning project designed to showcase the development of fully functional applications using various frontend and backend technologies. It provides a standard blogging platform feature set (similar to Medium), enabling developers to learn best practices for architecture and API integration in real-world scenarios.

## Learning Objective

This project is an opportunity to strengthen my skills in [Angular](https://angular.dev/) development, with a focus on modern features, [RxJS](https://rxjs.dev/) for reactive programming, and [Angular Router](https://angular.dev/guide/routing) for managing complex navigation flows. In the second version, I plan to redesign the application using [Angular Material](https://material.angular.io/) to improve user experience and learn to work with a component library. I also want to try modern browser APIs, like the [View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

## Key Features

-   **User Authentication**: Secure login, registration, and session management using JWT tokens.
-   **Article Management**: Full CRUD functionality for creating, editing, and deleting articles.
-   **Interactive Feeds**: Display of personalized article feeds with filters for tags and author preferences.
-   **Responsive Design**: Ensure the application looks and performs well across devices.
-   **Component-Based Redesign**: Transition to Angular Material for improved UI/UX.
-   **Page and Theme Transitions**: Add smooth transitions between pages and when changing the theme using the View Transition API.

## Technology Stack

**[Angular 19](https://angular.dev/)**: A framework for building dynamic web applications, offering tools like dependency injection, component-based architecture, and powerful template syntax.

**[RxJS](https://rxjs.dev/)**: A library for reactive programming, enabling efficient handling of asynchronous data streams in Angular.

**[Angular Route](https://angular.dev/guide/routing)**: A core Angular module for managing navigation and dynamically loading content based on user interactions.

**[Angular Material](https://material.angular.io/)**: A modern UI component library that provides ready-to-use, customizable components following the Material Design guidelines.

**[TypeScript](https://www.typescriptlang.org/)**: An extension of JavaScript with added static typing, which improving code stability and maintainability.

_Note: This project will serve as both a portfolio piece and a valuable learning exercise, showcasing my ability to build a complete and responsive frontend application using Angular and associated tools._

<details>
  <summary>Version</summary>
  
**v 1.0**
- [x] Main functionality
**v 1.1**
- [x] Migration to Angular material
**v 1.2**
- [x] Refactoring
**v 1.5**
- [x] zdd View Transition API
**v 1.6**
- [x] Add dark theme
**v 1.9**
- [x] Delete zone.js
**v 2.0**
- [x] Add mobile support
</details>
