# Project-Solvion

## DESCRIPTION
With Solvion we got the oportunity to develop our amazing 'Incidences Management Service' our solution against typical problems
inside a company where we take part to use our API to improve efficiency and organization.
## TEAM

Solvion has been developed by:

Juan Pablo Leber: https://github.com/JuanPabloLeber<br/>
Jeremy Camacho: https://github.com/mutazen<br/>
Samuel Peña: https://github.com/Samupb<br/>

# SCHEMAS

## ACTION

| KEY          | TYPE         | REFERENCE | REQUIRED |
|--------------|--------------|-----------|----------|
| done         | string       |           | YES      |
| status       | string       |           | YES      |
| startDate    | Date         |           | YES      |
| finishDate   | Date         |           | YES      |
| technicianId | [ ObjectId ] | employee  | NO       |

## CLIENTS

| KEY         | TYPE         | REFERENCE | REQUIRED |
|-------------|--------------|-----------|----------|
| firstName   | string       |           | NO       |
| lastName    | string       |           | NO       |
| email       | string       |           | NO       |
| password    | string       |           | NO       |
| phoneNumber | number       |           | NO       |
| address     | sring        |           | NO       |

## EMPLOYEES

| KEY         | TYPE         | REFERENCE   | REQUIRED  |
|-------------|--------------|-------------|-----------|
| firstName   | string       |             | YES       |
| lastName    | string       |             | YES       |
| email       | string       |             | YES       |
| password    | string       |             | YES       |
| rol         | string       | TEC, CS, MG | YES       |
| speciality  | array        |             | NO        |

## INCIDENCES

| KEY                | TYPE         | REFERENCE | REQUIRED  |
|--------------------|--------------|-----------|-----------|
| subject            | string       |           | YES       |
| description        | string       |           | YES       |
| status             | string       |           | YES       |
| priority           | string       |           | YES       |
| attachment         | string       |           | YES       |
| startDate          | date         |           | YES       |
| finishDate         | date         |           | YES       |
| technician         | [ objectId ] | employee  | NO        |
| incidenceCategory  | [ objectId ] |           | NO        |


# INCIDENCES CATEGORIES

| KEY    | TYPE   | REQUIRED |
|--------|--------|----------|
| name   | string | YES      |

## ACTION ENDPOINTS

| METHOD | URL                                       | AUTH | WHO IS ALLOWED | FUNCTION            |
|--------|-------------------------------------------|------|:--------------:|---------------------|
| POST   | '/incidences/:technicianId/:incidenceId'  | YES  | TEC & MG       | Create an Action    |
| PUT    | '/incidences/:incidenceId/:actionId'      | YES  | TEC & MG       | Update an Action    |

## CLIENT ENDPOINTS

| METHOD | URL                                                            | AUTH | FUNCTION         |
|--------|----------------------------------------------------------------|------|------------------|
| GET    | '/clientEmail/:clientEmail/clientPassword/:clientPassword'     | NO   | Get clients list |

## EMPLOYEES ENDPOINTS

| METHOD | URL           | AUTH | WHO IS ALLOWED | FUNCTION          |
|--------|---------------|------|----------------|-------------------|
| POST   | '/'           | YES  |       MG       |Create an employee |
| PUT    | '/:idEmployee | YES  |       MG       |Update an employee |
| GET    | '/'           | YES  |       MG       |Show an employee   |
| DELETE | '/'           | YES  |       MG       |Delete an employee |

## INCIDENCES ENDPOINTS

| METHOD | URL                                          | AUTH | WHO IS ALLOWED | FUNCTION               |
|--------|----------------------------------------------|------|----------------|------------------------|
| POST   | '/:customerServiceId/:incidenceCategory'     | YES  |       MG       |Add an incidence        |
| PUT    | '/:incidenceID'                              | YES  |       MG       |Update an incidence     |
| GET    | '/:incidenceID'                              | YES  |       MG       |Get list of incidences  |
| DELETE | '/incidenceID/:incidenceID                   | YES  |       MG       |Delete an incidence     |

## INCIDENCES CATEGORIES ENDPOINTS

| METHOD | URL                    | AUTH | WHO IS ALLOWED | FUNCTION                          |
|--------|---------------         |------|----------------|-----------------------------------|
| POST   | '/'                    | YES  |       MG       | Add an incidence category         |
| PUT    | '/:idIncidenceCategory | YES  |       MG       | Update an incidence category      |
| GET    | '/'                    | YES  |    CS & MG     | Get list of incidences categories |
| DELETE | '/'                    | YES  |       MG       | Delete an incidence category      |

##

* TEC: Technicians MG: Manager CS: Customer Service
