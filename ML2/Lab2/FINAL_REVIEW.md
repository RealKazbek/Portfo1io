# Strict second-pass review

| Teacher requirement | Where satisfied | Status |
|---|---|---|
| Task 1: house-price regression | Notebook and report | PASS |
| Kaggle dataset provenance | California Housing Prices — Kaggle — Cam Nugent; CSV hash verified | PASS |
| Dataset inspection: rows, shape, types, missing values, statistics | Notebook section 3 | PASS |
| Multiple Linear Regression (`LinearRegression`) | Notebook section 6 | PASS |
| MSE, MAE, and R² | Notebook and report tables | PASS |
| Coefficient table and interpretation | Notebook section 8; report section 8 | PASS |
| Multicollinearity explanation and practical VIF | Notebook section 9; report section 9 | PASS |
| Required formula, loss, probabilistic interpretation, assumptions | Notebook theory; report sections 4–7 | PASS |
| Actual vs predicted visualization | Notebook section 10 | PASS |
| Residual visualization | Notebook section 10 | PASS |
| Coefficient visualization | Notebook section 10 | PASS |
| Reproducible train/test split and leakage-safe preprocessing | Pipeline and `random_state=42` | PASS |
| Student names and group | Notebook and report title blocks | PASS |
| Notebook runs top-to-bottom without errors | Executed notebook inspected: 0 error outputs | PASS |
| Clean supporting documentation | README.md | PASS |
| Teams minimum two files | Notebook plus DOCX report, with CSV required for notebook execution | PASS |
| Teams notebook filename pattern | Current team filename is retained; singular-lastname pattern is ambiguous for two students | PARTIAL |
| Teams theory description format | DOCX accepted explicitly | PASS |

## Estimated grade

| Requirement | Max | Earned | Reason |
|---|---:|---:|---|
| Task scope, theory, and formulae | 23 | 23 | All Task 1 concepts are present. |
| Dataset and inspection | 12 | 12 | Correct consistent CSV with verified Cam Nugent Kaggle provenance. |
| Pipeline and LinearRegression | 22 | 22 | Leakage-safe preprocessing and required model. |
| Metrics, coefficients, VIF | 20 | 20 | Actual values and honest interpretation. |
| Visualizations and execution | 15 | 15 | Three useful plots; clean execution, zero errors. |
| Report and reproducibility | 8 | 8 | DOCX, CSV, README, and fixed split. |
| **Total** | **100** | **99** | Filename ambiguity is the only practical deduction. |

## Remaining risks

- The current filename contains both students’ identifiers but does not literally follow a singular `groupname_lastname.ipynb` pattern; no surname is invented for Yerserik.
- The Teams instructions explicitly accept DOCX, so lack of PDF is not a deduction.
- High VIF values and moderate R² are legitimate limitations and are reported transparently.
