npm create vite@latest

# SmartDemand AI

## Context-Aware Demand Forecasting and Supply Chain Analytics Platform

### Overview

SmartDemand AI is an end-to-end Supply Chain Analytics and Demand Forecasting platform designed to help businesses optimize inventory planning and forecast future demand using machine learning.

The platform combines data analytics, inventory management, machine learning forecasting, and business recommendations into a single dashboard.

---

## Features

### Inventory Analytics

* Inventory monitoring
* Stock status tracking
* Reorder level management
* Warehouse visibility

### Demand Forecasting

* Random Forest Regression model
* Context-aware demand prediction
* Economic indicator integration
* Business recommendation engine

### Analytics Dashboard

* KPI monitoring
* Forecast visualization
* Inventory insights
* Operational analytics

---

## Machine Learning

### Dataset

Walmart Retail Sales Dataset

### Feature Engineering

* Store
* Holiday Flag
* Temperature
* Fuel Price
* CPI
* Unemployment
* Year
* Month
* Quarter
* Week

### Model

Random Forest Regressor

### Performance

* R² Score: 0.9604
* MAE: 61,773.46

### Key Findings

* Store contributes 66.4% of predictive importance
* CPI contributes 15.5%
* Unemployment contributes 10.3%
* Weekly seasonality contributes 5.0%

---

## Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### Backend

* FastAPI
* Python

### Database

* PostgreSQL
* SQLAlchemy

### Data Science

* Pandas
* NumPy
* Scikit-Learn
* Matplotlib
* Seaborn

---

## Project Architecture

React Frontend

↓

FastAPI Backend

↓

PostgreSQL Database

↓

Random Forest Forecasting Engine

↓

Business Recommendation Layer

---

## Business Value

The system helps organizations:

* Improve inventory planning
* Reduce stock shortages
* Support demand forecasting
* Make data-driven supply chain decisions

---

## Future Enhancements

* XGBoost Forecasting
* Forecast Confidence Intervals
* Automated Inventory Optimization
* Cloud Deployment
* Real-Time Demand Monitoring
