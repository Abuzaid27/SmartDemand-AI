import pandas as pd

df = pd.read_csv("../datasets/Walmart.csv")

df["Date"] = pd.to_datetime(
    df["Date"],
    format="%d/%m/%Y"
)

df["Year"] = df["Date"].dt.year

df["Month"] = df["Date"].dt.month

df["Quarter"] = df["Date"].dt.quarter

df["Week"] = df["Date"].dt.isocalendar().week

print("\nFeature Engineered Dataset")

print(df.head())

df.to_csv(
    "../datasets/walmart_features.csv",
    index=False
)

print(
    "\nFeature file saved successfully"
)