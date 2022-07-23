import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import PropTypes from 'prop-types';

function ExportExcel({ books, searchQuery }) {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;

        let booksToBeExported = [];
        booksToBeExported = books.map(book => ({
            "Title": book?.title ?? "-",
            "Page Count": book?.pageCount ?? "-",
            "Language": book?.language ?? "-",
            "Main Author": book?.authors?.[0] ?? "-",
            "Publisher": book?.publisher ?? "-",
            "Published Date": book?.publishedDate ?? "-",
            "Print Type": book?.printType ?? "-",
            "Info Link": book?.infoLink ?? "-",
        }));

        const ws = XLSX.utils.json_to_sheet(booksToBeExported);
        const wb = { Sheets: { 'Books': ws }, SheetNames: ['Books'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });

        FileSaver.saveAs(data, `Books-Search-result-for-${searchQuery}-${dateTime}` + fileExtension);
    }

    return (
        <div>
            <button className="export-excel-btn" onClick={exportToCSV}>Export Excel</button>
        </div>
    )
}

// Add component props type checking
ExportExcel.propTypes = {
    books: PropTypes.array.isRequired,
    searchQuery: PropTypes.string.isRequired,
}

export default ExportExcel;