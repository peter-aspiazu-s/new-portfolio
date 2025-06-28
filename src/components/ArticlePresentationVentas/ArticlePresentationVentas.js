import styles from "./ArticlePresentation.module.css";

export const ArticlePresentationVentas = () => {
  return (
    <article className={styles["article-ventas-presentation"]}>
        <div className={styles["article-ventas-presentation-container"]}>
            <div className={styles["article-ventas-presentation-text"]}>
              <span>Nuevo curso</span>
              <h1>Aprende HTML5 y CSS3 con Proyectos</h1>
              <h2>Desde la Base al Diseño</h2>
              <p>Domina el desarrollo web frontend con proyectos prácticos y conviértete en un diseñador web profesional en tiempo récord.</p>
              <div className={styles["article-ventas-presentation-oferta"]}>
                <div>
                  <span>$89.99</span>
                  <span>$9.99</span>
                </div>
                <span>¡Oferta Limitada!</span>
              </div>

              <a href="#">¡Inscríbete ahora!</a>
              <a href="#">Ver video</a>

              <div>
                <div>
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23FFC107'/%3E%3Cpath d='M12,20 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0' fill='%23FFF'/%3E%3C/svg%3E" alt="Usuario"></img>
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%234CAF50'/%3E%3Cpath d='M12,20 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0' fill='%23FFF'/%3E%3C/svg%3E" alt="Usuario"></img>
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%23F44336'/%3E%3Cpath d='M12,20 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0' fill='%23FFF'/%3E%3C/svg%3E" alt="Usuario"></img>
                  <img class="w-10 h-10 rounded-full border-2 border-white" src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Ccircle cx='20' cy='20' r='20' fill='%232196F3'/%3E%3Cpath d='M12,20 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0' fill='%23FFF'/%3E%3C/svg%3E" alt="Usuario"></img>
                </div>
                <div>
                  <div>
                    <div>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <span>4.9/5</span>
                  </div>
                  <div>Más de 500 estudiantes satisfechos</div>
                </div>
              </div>
            </div>
            
            <div className="article-ventas-presentation-figure">
              <div>
                <div>
                  {/* circulo rojo */}
                  <span></span>
                  {/* circulo amarillo */}
                  <span></span>
                  {/* circulo verde */}
                  <span></span>
                </div>
                <div>
                  <div>
                    <pre>
                      <code>
                        &lt;div class=&quot;container&quot;&gt;&lt;/div&gt;
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code>
                        .css {`{`} color: blue; {`}`} 
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code>
                        &lt;h1&gt;HTML5&lt;/h1&gt;
                      </code>
                    </pre>
                  </div>
                  <div>
                    <pre>
                      <code>
                        #id {`{`} margin: 2rem; {`}`} 
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </article>
  )
}
