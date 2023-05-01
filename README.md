# Demo Dashboard with Tremor and RedwoodJS

A RedwoodJS application that implements a static and dynamic version of Tremor's [Demo Dashboard](https://www.tremor.so/docs/getting-started/demo-dashboard) as seen in their Getting Started documentation.

## Static and Dynamic

There is a static data version of the dashboard as well as a dynamic version that pulls from a SQLite database for KPI, SalesPeople and CompanyPerformance.

Scaffolding has been added to edit these datapoints so can be reflected in the dynamic dashboard.

### Static Screens

<img width="1283" alt="Screenshot 2023-04-27 at 9 54 34 AM" src="https://user-images.githubusercontent.com/1051633/234884055-8c1f7f74-3d4e-4f61-b091-aff6103cb222.png">
<img width="1254" alt="Screenshot 2023-04-27 at 9 55 11 AM" src="https://user-images.githubusercontent.com/1051633/234884204-325cda22-ca15-4118-a977-35efd8f7e6c1.png">

### Dynamic Screens

<img width="1269" alt="image" src="https://user-images.githubusercontent.com/1051633/234884304-ed308df8-0d96-472f-bfd1-15dd42774dc6.png">
<img width="1275" alt="image" src="https://user-images.githubusercontent.com/1051633/234884547-3af79ace-716d-454a-b3d3-7228d8041dfc.png">

## Getting Started

To launch this demo dashboard:

1. Fetch this repo

2. Install RedwoodJS and project dependencies

```bash
yarn install
````

> Note: Make sure you `cd` into the project directory and have `yarn` installed. Please see the [RedwoodJS Quick Start](https://redwoodjs.com/docs/quick-start) for help.

3. Migrate the Prisma SQLite database

```bash
yarn rw prisma migrate dev
```

4. Start the RedwoodJS Development Server

```bash
yarn rw dev
```

The application will laucnh and then you can browse the static and dynamic versions of teh dashboard, as well as update the data in the admin sections.

## RedwoodJS and Tremor Setup

Please see the [installation with RedwoodJS](installation-redwoodjs.md) instructions to learn how to use tremor in a new or existing project.

## About RedwoodJS

 Learn more about [RedwoodJS](https://redwoodjs.com)

 ## About Tremor

 Learn more about [Tremor](https://www.tremor.so)
