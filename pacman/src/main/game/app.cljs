(ns game.app)

(def canvas (.. js/document (querySelector "canvas")))
(def c (.. canvas (getContext "2d")))

(set! (.. canvas -width) (.. js/window -innerWidth))
(set! (.. canvas -height) (.. js/window -innerHeight))


; Component initialisers 
(def boundary-consts {:width 40 :height 40})


(def boundary-fns {:create (fn [& {:keys [position]}]
                         {:position position
                          :width (boundary-consts :width)
                          :height (boundary-consts :height)})
               :draw (fn [& {:keys [position height width]}]
                       (set! (.. c -fillStyle) "blue")
                       (.. c (fillRect (position :x) (position :y) width height)))})

(def player-fns {
                 :create (fn [& {:keys [position velocity]}]
                           {
                            :position position
                            :velocity velocity
                            :radius 15
                           })
                 :draw (fn [& {:keys [position radius]}]
                         (.. c (beginPath))
                         (.. c (arc 
                                (position :x)
                                (position :y)
                                radius
                                0
                                (* 2 (.. js/Math -PI))))
                         (set! (.. c -fillStyle) "yellow")
                         (.. c (fill))
                         (.. c (closePath))
                         )
                 })

; helper functions 

(defn map-to-boundaries [game-map]
  (for [i (range (count game-map))
        j (range (count (get-in game-map [0])))
        :when (= "-" (get-in game-map [i j]))]
    ((boundary-fns :create) {:position {:x (* (boundary-consts :width) j)
                                        :y (* (boundary-consts :height) i)}}))
  )


; Starting game componenents 

(def game-map [["-" "-" "-" "-" "-" "-"]
               ["-" " " " " " " " " "-"]
               ["-" " " "-" "-" " " "-"]
               ["-" " " " " " " " " "-"]
               ["-" "-" "-" "-" "-" "-"]])

(def boundaries (map-to-boundaries game-map))
(mapv (boundary-fns :draw) boundaries)

(def player ((player-fns :create)
             {:position {:x (+ (boundary-consts :width) (/ (boundary-consts :width) 2))
                         :y ( + (boundary-consts :height) (/ (boundary-consts :height) 2))}
              :velocity {:x 0 :y 0}}))

((player-fns :draw) player)





; Window event listeners 

(.. js/window (addEventListener "keydown"
                                (fn [event] 
                                  )))



(defn init []
  (println "game has started"))



