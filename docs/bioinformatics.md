# Data Processing
The bioinformatics pipeline processes raw sequencing reads to generate a whole genome sequence (WGS) and perform basic reads analysis. The primary tasks of the pipeline include:

- **Quality Control**: Filter out low-quality reads to ensure only high-confidence data is used for assembly.
- **WGS Assembly**: Perform de novo assembly of the raw reads into a whole genome sequence.
- **Basic Reads Analysis**: Provide initial metrics such as read depth, GC content, and sequence alignment.

## Data Flow
1. **Reads trimming**: Remove low-quality bases and adapter sequences from the raw reads to improve the accuracy of downstream analysis.
2. **Deduplication**: Identify and remove duplicate reads to prevent bias and improve the reliability of the assembly.
3. **Merging**: Combine overlapping paired-end reads into a single, longer read to enhance the data quality and assembly performance.
4. **Normalisation**: Reduce the redundancy in high-coverage reads to improve computational efficiency and assembly quality.
5. **QC check**: Assess the quality of the trimmed and processed reads to ensure they meet quality standards before proceeding to assembly.
6. **Genome assembly**: Assemble the high-quality, curated reads into contigs using SPAdes for generating the whole genome sequence.
7. **CheckV**: Evaluate the completeness, correctness, and contamination of the genome assembly to ensure its accuracy, especially for viral genomes.
8. **Read mapping**: Align the raw or curated reads to the assembled genome to assess coverage and validate the assembly’s accuracy.

## Dependencies
  - python>=3
  - checkv==1.0.3
  - biopython==1.83
  - bbmap==39.06
  - pandas==2.2.1
  - matplotlib==3.8.4
  - spades==3.15.5
  - fastqc==0.12.1
  - multiqc==1.22.1
  - pilon==1.24
  - packaging
  - deprecated

## Configuration
```json
{
 "system": {
  "RAM": 24000,
  "threads": 8
 },
 "input": {
  "interleaved_ext": "_interleaved.fastq",
  "r1_ext": "_R1.fastq.gz",
  "r2_ext": "_R2.fastq.gz"
 },
 "reads": {
  "read_length": 150,
  "trim_length": 10,
  "minimum_length": 100,
  "read_quality": 30,
  "error_correction": true,
  "target_coverage": 200
 },
 "assembly": {
  "kmers": "55,77,99,127"
 },
 "extraction": {
  "mincov": 60,
  "minlen": 4000,
  "mincomplete":90
 }
}
```