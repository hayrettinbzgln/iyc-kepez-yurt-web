import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/notfoundpage.css";

function NotFoundPage() {
    useEffect(() => {
        document.title = "Sayfa Bulunamadı | İlim Yayma Cemiyeti Antalya Kepez Yurdu";
    }, []);

    return (
        <section className="notfound-page">
            <div className="if-card notfound-card">
                <span className="if-badge">404</span>
                <h1 className="if-title notfound-title">Sayfa Bulunamadı</h1>
                <p className="if-subtitle notfound-text">
                    Aradığınız sayfa taşınmış, kaldırılmış ya da hiç var olmamış olabilir.
                </p>
                <div className="if-actions notfound-actions">
                    <Link to="/" className="if-btn if-btn--primary">
                        Ana Sayfaya Dön
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
