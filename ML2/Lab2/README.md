# ML II Laboratory Assignment №2 — Task 1

This submission predicts California district median house values with Multiple Linear Regression.

Dataset: **California Housing Prices — Kaggle — Cam Nugent** ([Kaggle dataset](https://www.kaggle.com/datasets/camnugent/california-housing-prices)). `california_housing.csv` has 20,640 rows and 10 columns; target `median_house_value`. The included copy corresponds byte-for-byte to the public `housing.csv` source referenced by that Kaggle dataset. The CSV is included so the notebook does not depend on a machine-specific path or a live download.

Dependencies: Python 3, pandas, numpy, scikit-learn, matplotlib, statsmodels, nbformat, nbconvert, and python-docx.

Run from this folder with `jupyter notebook IT2-2302_Assanbek_Yerserik.ipynb`, then use Run All. The notebook is already executed and contains its outputs. The report is generated as `Assanbek_Yerserik.docx`.

Final test metrics: MSE = 4,908,290,571.35; MAE = 50,670.49; R² = 0.6254. The fixed split is 80/20 with `random_state=42`.

Upload the notebook, CSV dataset, and DOCX report. `FINAL_REVIEW.md` is an internal quality checklist and the original assignment PDF should be preserved but is not part of the student report.
