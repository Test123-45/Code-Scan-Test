Below is **an approximate (high-level) mapping** of the most common CWEs in the JavaScript/TypeScript CodeQL queries to **OWASP Top 10 (2021)** categories. Note that **OWASP Top 10** is not a strict one-to-one taxonomy with CWE: many CWEs can fall under multiple OWASP risk categories, and some OWASP categories can map to multiple CWEs. 

The table below is intended as **guidance**, not an exact standard. Always review the CWE detail and your specific application context to confirm the most appropriate OWASP category.

---

## OWASP Top 10 (2021) Quick Reference

- **A01: Broken Access Control**  
- **A02: Cryptographic Failures**  
- **A03: Injection**  
- **A04: Insecure Design**  
- **A05: Security Misconfiguration**  
- **A06: Vulnerable and Outdated Components**  
- **A07: Identification and Authentication Failures**  
- **A08: Software and Data Integrity Failures**  
- **A09: Security Logging and Monitoring Failures**  
- **A10: Server-Side Request Forgery (SSRF)**  

---

## 1:1-Like Mapping (Approximate)

| **CWE**   | **Typical Meaning / Weakness**                                                            | **Likely OWASP Top 10 (2021)**                                |
|-----------|--------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| **CWE-20**  | Improper Input Validation                                                                | **A03: Injection**  (many injection types rely on invalid input) |
| **CWE-22**  | Path Traversal                                                                           | **A03: Injection**                                              |
| **CWE-23**  | Relative Path Traversal                                                                  | **A03: Injection**                                              |
| **CWE-36**  | Absolute Path Traversal                                                                  | **A03: Injection**                                              |
| **CWE-73**  | External Control of File Name or Path                                                    | **A03: Injection**                                              |
| **CWE-74**  | Injection (e.g., XSS, Command, Code)                                                    | **A03: Injection**                                              |
| **CWE-77**  | Command Injection                                                                        | **A03: Injection**                                              |
| **CWE-78**  | OS Command Injection                                                                     | **A03: Injection**                                              |
| **CWE-79**  | Cross-Site Scripting (XSS)                                                               | **A03: Injection**                                              |
| **CWE-80**  | Improper Neutralization of Script-Related HTML Tags (XSS)                                | **A03: Injection**                                              |
| **CWE-88**  | Argument Injection or Modification                                                       | **A03: Injection**                                              |
| **CWE-89**  | SQL Injection                                                                            | **A03: Injection**                                              |
| **CWE-90**  | LDAP Injection, or other injection variants                                              | **A03: Injection**                                              |
| **CWE-91**  | XML Injection or XPath Injection (depends on context)                                    | **A03: Injection**                                              |
| **CWE-94**  | Code Injection (e.g., `eval`)                                                            | **A03: Injection**                                              |
| **CWE-95**  | Improper Neutralization of Directives in Dynamically Evaluated Code                      | **A03: Injection**                                              |
| **CWE-116** | Improper Encoding/escaping of output (often leads to XSS)                                | **A03: Injection**  (XSS)                                       |
| **CWE-117** | Improper Output Neutralization for Logs (Log Injection)                                  | **A03: Injection**                                              |
| **CWE-134** | Format String Vulnerability                                                              | **A03: Injection**                                              |
| **CWE-183** | Insecure CORS configuration (Overly permissive)                                          | Often **A05: Security Misconfiguration** or **A01: Broken Access Control** |
| **CWE-184** | Incomplete Filter/Check (can lead to injection)                                          | **A03: Injection** (if directly leads to injection)             |
| **CWE-193** | Off-by-one Errors, Out-of-Bounds                                                        | Not typically in OWASP Top 10 (more quality/logic flaw)         |
| **CWE-200** | Information Exposure (generic)                                                           | Could be **A01: Broken Access Control** (if exposing data) or **A09: Logging & Monitoring** (if it’s error-based) |
| **CWE-209** | Information Exposure Through an Error Message                                            | **A09: Security Logging and Monitoring Failures**               |
| **CWE-250** | Execution with Unnecessary Privileges                                                    | **A01: Broken Access Control**                                  |
| **CWE-256** | Plaintext Storage of a Password                                                          | **A07: Identification and Authentication Failures**             |
| **CWE-259** | Hard-coded Password                                                                      | **A07: Identification and Authentication Failures**             |
| **CWE-284** | Improper Access Control                                                                  | **A01: Broken Access Control**                                  |
| **CWE-285** | Improper Authorization                                                                   | **A01: Broken Access Control**                                  |
| **CWE-287** | Improper Authentication                                                                  | **A07: Identification and Authentication Failures**             |
| **CWE-290** | Authentication Bypass                                                                    | **A07: Identification and Authentication Failures**             |
| **CWE-295** | Improper Certificate Validation                                                          | **A02: Cryptographic Failures** or **A05: Security Misconfiguration**     |
| **CWE-307** | Improper Restriction of Excessive Authentication Attempts (Brute Force)                  | **A07: Identification and Authentication Failures**             |
| **CWE-311** | Missing Encryption of Sensitive Data                                                     | **A02: Cryptographic Failures**                                 |
| **CWE-312** | Cleartext Storage of Sensitive Information                                               | **A02: Cryptographic Failures** or **A07** (depending on context) |
| **CWE-321** | Use of Hard-coded Cryptographic Key                                                      | **A07: Identification and Authentication Failures** (also **A02** if focusing on crypto) |
| **CWE-326** | Inadequate Encryption Strength                                                           | **A02: Cryptographic Failures**                                 |
| **CWE-327** | Broken or Risky Crypto Algorithm (e.g., MD5)                                             | **A02: Cryptographic Failures**                                 |
| **CWE-328** | Reversible One-Way Hash (Weak Hash)                                                      | **A02: Cryptographic Failures**                                 |
| **CWE-330** | Use of Insufficiently Random Values                                                      | **A02: Cryptographic Failures**                                 |
| **CWE-338** | Use of Cryptographically Weak Pseudo-Random Number Generator                             | **A02: Cryptographic Failures**                                 |
| **CWE-352** | Cross-Site Request Forgery (CSRF)                                                        | Often **A01: Broken Access Control**, though some place it under **A03**  |
| **CWE-400** | Uncontrolled Resource Consumption (Resource Exhaustion, ReDoS, etc.)                     | Could map to **A04: Insecure Design** or **A05: Security Misconfiguration**; ReDoS often considered **A03: Injection** |
| **CWE-441** | Client-Side Request Forgery or SSRF                                                      | **A10: Server-Side Request Forgery (SSRF)** if server-targeted   |
| **CWE-502** | Deserialization of Untrusted Data                                                        | **A08: Software and Data Integrity Failures**                    |
| **CWE-522** | Insufficiently Protected Credentials                                                     | **A07: Identification and Authentication Failures**             |
| **CWE-611** | XML External Entity (XXE)                                                                | Typically **A03: Injection** (XXE is a form of injection)        |
| **CWE-614** | Sensitive Cookie in HTTP (not enforced HTTPS)                                            | **A02: Cryptographic Failures** or **A05: Security Misconfiguration**     |
| **CWE-639** | Insecure Direct Object Reference (IDOR)                                                  | **A01: Broken Access Control**                                  |
| **CWE-640** | Weak Password Recovery Mechanism                                                         | **A07: Identification and Authentication Failures**             |
| **CWE-918** | Server-Side Request Forgery (SSRF)                                                       | **A10: Server-Side Request Forgery (SSRF)**                      |
| **CWE-922** | Insecure Storage of Sensitive Information                                                | **A07: Identification and Authentication Failures**             |
| **CWE-942** | Overly Permissive Access Control / Injection in Queries                                  | **A03: Injection**                                              |
| **CWE-943** | XPath Injection or SQL Injection                                                         | **A03: Injection**                                              |
| **CWE-1004**| Sensitive Cookie Accessible to Client                                                    | **A07: Identification and Authentication Failures** (or **A02** if about encryption) |
| **CWE-1021**| Insecure Configuration (e.g., security middleware misconfig)                             | **A05: Security Misconfiguration**                               |
| **CWE-1176**| Angular double compilation (could lead to unexpected code injection)                     | **A03: Injection**                                              |
| **CWE-1275**| Cookie attribute misconfiguration (e.g., missing SameSite)                               | Typically **A07** if it affects session ID or **A05** if a misconfiguration |
| **CWE-1333**| Regular Expression DoS (ReDoS)                                                           | **A03: Injection** if exploited via untrusted input              |

> **Note**: Some CWEs map to multiple categories. For example, **XXE (CWE-611)** is *often listed* under Injection (A03) but could be argued as a Security Misconfiguration (A05). Similarly, **CSRF (CWE-352)** is frequently classed under Broken Access Control (A01), though older references sometimes list it as Injection.  

---

## Example of a “Per Query” Mapping

If you need a “CodeQL Query ID \(\rightarrow\) CWE \(\rightarrow\) OWASP Top 10” table, you can do so by first looking at the official [**CodeQL JavaScript/TypeScript Query Help**](https://codeql.github.com/codeql-query-help/javascript/) or the list you pasted, **finding the CWE** each query references, then applying the approximate mapping above.

For instance:

| **CodeQL Query ID**                    | **CWE** | **OWASP Top 10**        |
|----------------------------------------|--------|-------------------------|
| `js/reflected-xss`                     | CWE-79 | A03: Injection (XSS)    |
| `js/sql-injection`                     | CWE-89 | A03: Injection (SQLi)   |
| `js/hardcoded-credentials`            | CWE-259, CWE-321, etc. | A07: Identification & Auth Failures |
| `js/prototype-pollution`              | CWE-471, CWE-915, etc. | Typically A03: Injection \*          |
| `js/missing-rate-limiting`            | CWE-307, CWE-770       | A07: Identification & Auth Failures (or sometimes A01) |
| `js/insecure-randomness`              | CWE-330, CWE-338       | A02: Cryptographic Failures          |
| `js/xss-more-sources`                 | CWE-79                  | A03: Injection (XSS)                 |
| `js/unsafe-deserialization`           | CWE-502                 | A08: Software Integrity Failures     |
| `js/remote-property-injection`        | CWE-250, CWE-693, etc. | A03: Injection (or A04/A08, depending on context) |

\(\*\) **Prototype Pollution** (CWE-471, CWE-915, etc.) can manifest as either an **Injection** (A03) or an **Insecure Design** (A04). Many references classify it under injection vulnerabilities because it manipulates internal object structures through untrusted input.

---

## Important Caveats

1. **Multiple Possible Mappings**  
   A single CWE can map to multiple OWASP categories. For example, **CWE-352 (CSRF)** can be either Broken Access Control (A01) or Injection (A03), depending on perspective.

2. **Context Matters**  
   The same CWE in different parts of your code or environment might align to a different OWASP category. Always assess the actual risk scenario.

3. **Not All Queries = OWASP Top 10**  
   Many queries detect quality issues (like unreachable code, naive defensive code, etc.) which do not map to the **OWASP Top 10** at all.

4. **OWASP Top 10 Changes**  
   The table references **OWASP Top 10 (2021)**. Future versions (or older ones) have different numbering and categories.

---

### Further Reading

- [**CWE to OWASP Top 10** official mappings (from MITRE & OWASP)**](https://cwe.mitre.org/mappings/OWASP.html)  
- [**CodeQL Query Help (JavaScript/TypeScript)**](https://codeql.github.com/codeql-query-help/javascript/)  
- [**OWASP Top 10 (2021)**](https://owasp.org/Top10/)  

---

**Summary**: This table provides **a best-effort mapping** of CodeQL’s JavaScript/TypeScript security queries (grouped by CWE) to the **OWASP Top 10 (2021)**. When you generate CodeQL reports, you can use these mappings to classify each finding under an OWASP risk category for easier prioritization and compliance.  