# 🌤️ City Weather Explorer

A frontend demo that integrates city search and weather data from public APIs.

## Overview

1st version:

- Searching cities and countries with fuzzy matching
- Displaying weather summaries including precipitation and sunrise/sunset times

2nd version:

- Integrating historical weather data (around one month)
- Structuring clean service logic, data flow, and UI layers

## Design & Architecture

The project is structured as follows:

```bash
src/
├── components/      # UI presentation only
│   ├── SearchBar.tsx
│   ├── CityList.tsx
│   └── WeatherCard.tsx
├── hooks/           # Data logic and UI hooks
│   ├── useCitySearch.ts
│   ├── useWeatherData.ts
│   └── useAstronomyData.ts
├── services/        # API requests and response handling
│   ├── cityService.ts
│   ├── weatherService.ts
│   └── astronomyService.ts
├── store/           # (Planned) Zustand for shared states
├── pages/
│   ├── index.tsx
│   └── city/[id].tsx
└── styles/
```

The goal is to clealy separate

- data fetching
- state management
- UI presentation

to make future expansion and refactoring straightforward.

## 🛠️ Development Plan

A structured workflow divided into key phases:

### Data Preparation

- [x] Connect and test public APIs
- [] Write TypeScript types for API response entities
- [] Build reusable service functions for each data source

### UI Setup

- [x] Design basic page layout and component hierarchy
- [] Implement core UI elements (search bar, cards, lists)
- [] Refine styling and responsive behavior

### Connecting Layers

- [] Create custom hooks for data fetching and logic
- [] Connect hooks with UI components
- [] Add global state (Zustand) for shared data

### Test & Optimize

- [] Implement API caching and debounce logic
- [] Test loading and error states
- [] Final review, performance tuning, and documentation cleanup

## 🚀 Future Improvements

- Add dark/light theme toggle
- Introduce i18n (internationalization)
- Improve API caching and offline support
- Visualize data with charts for weather trends
- Explore progressive web app (PWA) support